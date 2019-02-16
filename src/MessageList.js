import * as React from "react";
import MessageListItem from "./MessageListItem";

class MessageList extends React.PureComponent {
  render() {
    const { messages } = this.props;
    console.log(JSON.stringify(messages, null, 2));
    return (
      <div className="messageList">
        <h3>Messages</h3>
        {messages.map((group, index) => (
          <div className="messageGroup" key={index}>
            {group.map(messageId => (
              <MessageListItem key={messageId} id={messageId} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default MessageList;
