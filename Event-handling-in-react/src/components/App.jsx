import React, { useState } from "react";

function App() {
  var [colorButton, setColorButton] = useState("white");

  function overButton() {
    setColorButton("black");
  }

  function offButton() {
    setColorButton("white");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: colorButton }}
        onMouseOver={overButton}
        onMouseOut={offButton}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
