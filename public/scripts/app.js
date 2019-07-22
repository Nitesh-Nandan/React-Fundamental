"use strict";

console.log("App.js is running!!");

var app1 = {
    title: "Some title",
    subtitle: "This is my subtitle"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app1.title
    ),
    React.createElement(
        "p",
        null,
        app1.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        ),
        React.createElement(
            "li",
            null,
            "Item Three"
        ),
        React.createElement(
            "li",
            null,
            "Item Four"
        )
    )
);

// Couter App

var appRoot = document.getElementById('app');

var Count = 0;
var addOne = function addOne() {
    Count++;
    console.log("addOne");
    render();
};
var minusOne = function minusOne() {
    Count--;
    console.log("minusOne");
    render();
};
var reset = function reset() {
    Count = 0;
    console.log("Reset the counter");
    render();
};

var render = function render() {
    var template2 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            Count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );
    ReactDOM.render(template2, appRoot);
};

render();
