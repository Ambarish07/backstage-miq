# backstage-plugin-scaffolder-backend-module-slack-notifications

The slack-notifications module for [@backstage/plugin-scaffolder-backend](https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend).

_This plugin was created through the Backstage CLI_.
This custom action allows you to send messages to a Slack channel using Backstage's scaffolder.

## Overview

The `notify:slack` action sends a message to a specified Slack channel. It uses the Slack API to post messages and can be configured with a token stored in your configuration file.

## Configuration

### Prerequisites

- A Slack bot token with permissions to post messages.
  - chat:write
  - chat:write.public

### Configuration File

Add your Slack token to the `app-config.yaml`:

```yaml
integrations:
  slack:
    token: 'xoxb-your-slack-token'
```

## Template Example

Here's an example of how to use the action in a Backstage template:

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: slack-notify
  title: Slack Notification Template
  description: Sends a notification to a Slack channel
spec:
  owner: your-owner
  type: notification
  steps:
    - id: text_notify
      name: Send Slack text Notification
      action: notify:slack
      input:
        channel: 'your-channel-id'
        message:
          text: '*Hello, this is a notification from Backstage!*'
    - id: block_notify
      name: Slack Notification
      action: notify:slack
      input:
        channel: 'your-channel-id'
        message:
          blocks:
            - type: section
              text:
                type: mrkdwn
                text: '*Hello, this is a notification from Backstage!*'
            - type: section
              fields:
                - type: mrkdwn
                  text: '*Block 1*: section 1'
                - type: mrkdwn
                  text: '*Block 2*: section 2'
```

## Action Input

- **`channel`**: (string) The Slack channel ID where the message will be sent.
- **`message`**: (object) The message content, which can include:
  - **`text`**: (string) The text of the message.
  - **`blocks`**: (array) Optional blocks for rich message formatting.

**Note**: You should either pass `text` or `blocks` in `message`. If both are provided in the `message` object, only `blocks` will be considered for sending the Slack message.
