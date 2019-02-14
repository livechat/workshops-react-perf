import * as React from "react";
import Message from "./Message";

class MessageList extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="messageList">
        {messages.map(({ author, text, messageState }, index) => (
          <Message
            author={author}
            text={text}
            key={index}
            messageState={messageState}
          />
        ))}
      </div>
    );
  }
}

export default MessageList;
