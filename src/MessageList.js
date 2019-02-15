import * as React from "react";
import MessageListItem from "./MessageListItem";

class MessageList extends React.PureComponent {
  render() {
    const { messages } = this.props;
    return (
      <div className="messageList">
        <h3>Messages</h3>
        {messages.map(messageId => (
          <MessageListItem key={messageId} id={messageId} />
        ))}
      </div>
    );
  }
}

export default MessageList;
