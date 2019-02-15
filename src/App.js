import React from "react";
import { connect } from "react-redux";

import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import AgentBar from "./AgentBar";

class App extends React.Component {
  render() {
    const { messages, messageDraft } = this.props;
    return (
      <div className="app">
        <div className="titlebar">Chat</div>
        <AgentBar />
        <MessageList messages={messages} />
        <MessageInput hasText={Boolean(messageDraft)} />
      </div>
    );
  }
}

const getGroupedMessages = state => {
  return state.messages.reduce(
    (accumulator, current) => {
      const last = accumulator[accumulator.length - 1];
      if (last.length < 2) {
        return [...accumulator.slice(0, -1), [...last, current]];
      }
      return [...accumulator, [current]];
    },
    [[]]
  );
};

const mapStateToProps = state => ({
  messages: getGroupedMessages(state),
  messageDraft: state.messageDraft
});

export default connect(mapStateToProps)(App);
