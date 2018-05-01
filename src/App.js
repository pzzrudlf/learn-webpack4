import React, { Component } from "react";
import ReactDom from "react-dom";

const App = () => {
    return (
        <div>
            <p>Hello, React!</p>
        </div>
    )
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));