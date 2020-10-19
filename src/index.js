import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(<App />, document.getElementById("root"));

// ReactDOM.hydrate(
// 	<React.StrictMode>

// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

serviceWorker.unregister();
