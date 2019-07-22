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
