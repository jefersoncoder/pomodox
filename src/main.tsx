import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import TimerProvider from "./contexts/timer/provider";
import "./styles/globals.css";

ReactDOM.render(
  <React.StrictMode>
    <TimerProvider>
      <App />
    </TimerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
