console.log("App.js is running!!")

var app1 = {
    title: "Some title",
    subtitle: "This is my subtitle"
};

var template = (
    <div>
        <h1>{app1.title}</h1>
        <p>{app1.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
            <li>Item Four</li>
        </ol>
    </div>
);

// Couter App

const appRoot = document.getElementById('app');

let Count = 0;
const addOne = () => {
    Count++;
    console.log("addOne");
    render();
}
const minusOne = () => {
    Count--;
    console.log("minusOne");
    render();
}
const reset = () => {
    Count = 0;
    console.log("Reset the counter");
    render();
}


const render = () => {
    var template2 = (
        <div>
            <h1>Count: {Count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template2, appRoot);
}


render();
