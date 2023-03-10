import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Set Up Redux Tool Kit
import { Provider } from "react-redux";
import { configStore } from "./Redux/configStore.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Provider store={configStore}>
      <App />
   </Provider>
);
