import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./context/SellContext/StateProvider";
import reducer, { initialState } from "./context/SellContext/reducer";
import GlobalStyles from "./globalStyles";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <React.StrictMode>
    <StateProvider
      initialState={
        !localStorage.getItem("session")
          ? initialState
          : JSON.parse(localStorage.getItem("session"))
      }
      reducer={reducer}
    >
      <GlobalStyles />
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
