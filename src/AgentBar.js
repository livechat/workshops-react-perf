import React from "react";
import { connect } from "react-redux";

class AgentBar extends React.Component {
  render() {
    const { name, title } = this.props;
    return (
      <div className="agentbar">
        <div className="avatar">
          <img src="https://media.chat.io/bot/bot.png" alt="agent avatar" />
        </div>
        <div>
          <div className="agentName">{name}</div>
          <div className="agentTitle">{title}</div>
        </div>
      </div>
    );
  }
}

const selectAgent = state => {
  return {
    name: state.agent.name,
    title: state.agent.title
  };
};

const mapStateToProps = state => ({
  ...selectAgent(state)
});

export default connect(mapStateToProps)(AgentBar);
