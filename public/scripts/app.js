"use strict";

console.log("App.js is running!!");

var template = React.createElement(
  "p",
  null,
  "This is JSX from app.js!! This is my firt app."
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, app);
