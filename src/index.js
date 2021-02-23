import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";

import MultiStepForm from "./MultiStepForm";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <MultiStepForm />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
