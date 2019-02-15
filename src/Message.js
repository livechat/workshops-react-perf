import React from "react";

const Message = ({ author, text, messageState }) => (
  <div className="message">
    <div className="author">{author}</div>
    <div className="text">{text}</div>
    <div className="messageState">{messageState}</div>
  </div>
);

export default Message;
