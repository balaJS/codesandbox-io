import React, { useEffect } from "react";
import "./styles.css";

const makeDocumentTitle = (name = null) => {
  useEffect(() => {
    if (document && name) {
      document.title = name;
    }
  }, [name]);
};

export default function App() {
  makeDocumentTitle("My App from component");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Check the document title by opening the page in a new tab.</h2>
    </div>
  );
}
