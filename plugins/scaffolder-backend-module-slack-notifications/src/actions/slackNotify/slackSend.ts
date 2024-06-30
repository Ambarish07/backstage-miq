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

import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { Config } from '@backstage/config';

/**
 * Slack message
 * @public
 */
export interface SlackMessage {
  [key: string]: any;
  text?: string;
  blocks?: object[];
}
/**
 * Creates a `notify:slack` action.
 * @public
 */
export function slackSendMessage(options: { config: Config }) {
  const { config } = options;
  return createTemplateAction<{
    channel: string;
    message: SlackMessage;
  }>({
    id: 'notify:slack',
    description: 'Send Slack message to slack channel',
    schema: {
      input: {
        type: 'object',
        required: ['message'],
        properties: {
          channel: {
            title: 'Slack Channel ID',
            type: 'string',
            default: '',
          },
          message: {
            title: 'Message to send',
            type: 'object',
            default: '',
          },
        },
      },
    },
    async handler(ctx) {
      const { channel, message } = ctx.input;
      const slackMessageApi: string = 'https://slack.com/api/chat.postMessage';
      const token: string =
        config.getOptionalString('integrations.slack.token') || ''; // Get the slack token from the config file. Looks like: xoxb-xxxxxxxxxxxx-xxxxxxxxxx
      const response = await fetch(slackMessageApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          channel: channel,
          blocks: message.blocks ? message.blocks : [],
          text: message.text ? message.text : '',
        }),
      }).then(data => data.json());
      if (!response.ok) {
        const errorMessage = `Failed sending slack message: ${response.error}`;
        ctx.logger.error(errorMessage);
        ctx.output('response', { ok: response.ok });
        throw new Error(errorMessage);
      }
      ctx.output('response', { ok: response.ok });
      ctx.logger.info(`Notified to ${channel}`);
    },
  });
}
