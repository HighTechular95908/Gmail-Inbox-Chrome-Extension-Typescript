import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from 'react-redux'
import store from './redux/store'
// import { firstUseExtension } from "./dispatch";

// if (localStorage.getItem("gmailLayoutStates")) {
//   firstUseExtension();
// }

const root = document.createElement("div");
root.className = "main-container";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
