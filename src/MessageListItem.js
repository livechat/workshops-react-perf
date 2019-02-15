import * as React from "react";
import { connect } from "react-redux";
import Message from "./Message";

const MessageListItem = ({ author, text, messageState }) => (
  <Message author={author} text={text} messageState={messageState} />
);

const mapStateToProps = (state, { id }) => {
  const { author, text, messageState } = state.messagesById[id];
  return {
    author,
    text,
    messageState
  };
};

export default connect(mapStateToProps)(MessageListItem);
