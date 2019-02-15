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

const mapStateToProps = state => ({
  messages: state.messages,
  messageDraft: state.messageDraft
});

export default connect(mapStateToProps)(App);
