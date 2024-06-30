/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ConfigReader } from '@backstage/config';
import { slackSendMessage } from './slackSend';
import nock from 'nock';
import { createMockActionContext } from '@backstage/plugin-scaffolder-node-test-utils';

describe('slackSendMessage', () => {
  const config = new ConfigReader({
    integrations: {
      slack: {
        token: '<SLACK_BOT_TEST_TOKEN>',
      },
    },
  });
  beforeEach(() => {
    nock.cleanAll();
  });
  const action = slackSendMessage({ config });
  const token = config.getOptionalString('integrations.slack.token');
  const mockChannel = '<SLACK_MOCK_CHANNEL>';
  const defaultContext = createMockActionContext({
    output: jest.fn(),
  });
  defaultContext.logger.info = jest.fn();
  defaultContext.logger.error = jest.fn();
  it('should send a Slack text message successfully', async () => {
    const mockMessage = { text: 'Hello, Slack!' };
    const mockResponse = { ok: true, channel: mockChannel };

    const context = {
      ...defaultContext,
      input: {
        channel: mockChannel,
        message: mockMessage,
      },
    };

    nock('https://slack.com', {
      reqheaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .post('/api/chat.postMessage', {
        channel: mockChannel,
        blocks: [],
        text: mockMessage.text,
      })
      .reply(200, mockResponse);
    await action.handler(context);

    expect(context.output).toHaveBeenCalledWith('response', {
      ok: mockResponse.ok,
    });
    expect(context.logger.info).toHaveBeenCalledWith(
      `Notified to ${mockChannel}`,
    );
    console.log(nock.isDone());
  });

  it('should send a Slack block message successfully', async () => {
    const mockMessage = {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*Hello, this is a notification from Backstage!*',
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: '*Block 1*: section 1',
            },
            {
              type: 'mrkdwn',
              text: '*Block 2*: section 2',
            },
          ],
        },
      ],
    };

    const mockResponse = { ok: true, channel: mockChannel };
    const context = {
      ...defaultContext,
      input: {
        channel: mockChannel,
        message: mockMessage,
      },
    };

    nock('https://slack.com')
      .post('/api/chat.postMessage', {
        channel: mockChannel,
        blocks: mockMessage.blocks,
        text: '',
      })
      .reply(200, mockResponse);

    await action.handler(context);

    expect(context.output).toHaveBeenCalledWith('response', {
      ok: mockResponse.ok,
    });
    expect(context.logger.info).toHaveBeenCalledWith(
      `Notified to ${mockResponse.channel}`,
    );
  });

  it('should throw an error if the Slack API returns a non-ok response', async () => {
    const mockMessage = { text: 'Hello, Slack!' };

    nock('https://slack.com')
      .post('/api/chat.postMessage')
      .reply(200, { ok: false, error: 'channel_not_found' });

    const context = {
      ...defaultContext,
      input: {
        channel: '',
        message: mockMessage,
      },
    };
    await expect(action.handler(context)).rejects.toThrow(
      'Failed sending slack message: channel_not_found',
    );

    expect(context.logger.error).toHaveBeenCalledWith(
      'Failed sending slack message: channel_not_found',
    );
  });
});
