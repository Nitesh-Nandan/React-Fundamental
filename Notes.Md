``` JavaScript
console.log("App.js is running!!")

// JSX - JavaScript XML

// React.createElement("div", null, "Hello Nitesh");
var template = <div>Hello Nitesh</div>;

var appRoot = document.getElementById('app');

ReactDOM.render(template, app);

```

``` .sh

npm install global add babel-cli

babel src/app.js --out-file=public/scripts/app.js --presets=env,react

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

```