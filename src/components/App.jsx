import "../App.css";
import "../index.css";
import {Toggle} from "./Toggle.jsx"
import React, { useState } from "react";

function App() {
    const [dark, setDark] = useState(false);

    return (
        <div className="App" data-theme={dark ? "dark" : "light" /*O tema claro funciona porque as variáveis em :root são o padrão, usadas quando data-theme não é "dark".*/}>
            <Toggle isChecked={dark}
                handleChange={() => setDark(!dark)}
            />
            <h1 className="title"> Hello World</h1>
            <div className="box">
                <h2>This is a  box</h2>
            </div>
        </div>
    );
};

export default App
