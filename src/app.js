console.log("App.js is running!!")
const appRoot = document.getElementById("app");

const app = {
    title: "Indecision App",
    subtitle: "Put your life in hands of a computer",
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        render();
    }
}

const removeAll = (event) => {
    app.options = [];
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your option" : "No Options"}</p>
            <p>{app.options.length}</p>
            <p><button onClick={removeAll}>Remove All</button></p>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();
