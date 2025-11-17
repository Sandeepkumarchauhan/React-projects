import React from "react";
import ReactDOM from "react-dom/client";
import HEADER from "./components/HEADER";
import BODY from "./components/BODY";

const APPLayout = () => {
    return (
        <div className="App">
            <HEADER/>
            <BODY/>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<APPLayout/>);
