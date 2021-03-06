import * as React from "react";
import { connect } from "react-redux";
import { SET_MESSAGE_DRAFT } from "./actionsTypes";

class MessageInput extends React.Component {
  handleInputChange = event => {
    this.props.boundSetMessageDraft(event.target.value);
  };
  render() {
    const { hasText } = this.props;
    return (
      <div className="messageInput">
        <textarea
          className="input"
          onChange={this.handleInputChange}
          placeholder="Type message here..."
        />
        <button
          disabled={!hasText}
          className={`send ${hasText ? "" : "disabled"}`}
        >
          Send
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const setMessageDraft = text => ({
  type: SET_MESSAGE_DRAFT,
  messageDraft: text
});

const mapDispatchToProps = dispatch => ({
  boundSetMessageDraft: text => dispatch(setMessageDraft(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput);
