import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { SET_MESSAGE_DRAFT, SET_MESSAGE_STATE } from "./actionsTypes";
import defaultState from "./simpleState.json";
// import defaultState from "./complexState.json";

import { whyDidYouUpdate } from "why-did-you-update";

import "./index.css";
whyDidYouUpdate(React);

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MESSAGE_DRAFT:
      return {
        ...state,
        messageDraft: action.messageDraft
      };
    case SET_MESSAGE_STATE: {
      return {
        ...state,
        messages: state.messages.map((message, index) =>
          index === action.index
            ? { ...message, messageState: action.messageState }
            : message
        )
      };
    }
    default:
      return state;
  }
};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// change message2 state every second
let last = false;
setInterval(() => {
  store.dispatch({
    type: SET_MESSAGE_STATE,
    index: 2,
    messageState: last ? "seen" : "delivered"
  });
  last = !last;
}, 1000);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
