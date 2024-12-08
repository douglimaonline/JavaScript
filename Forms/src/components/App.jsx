import React, { useState } from "react";

function App() {
  var [mouseOverButton, setMouseHoverButton] = useState(false);
  var [name, setname] = useState("");
  var [greetings, setGreetings] = useState("Hello");

  function overButton() {
    setMouseHoverButton(false);
  }

  function offButton() {
    setMouseHoverButton(true);
  }

  function onChange() {
    setname(event.target.value);
  }

  function onClick(event) {
    setGreetings(name === "" ? "Hello" : `Hello, ${name}`);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>{greetings}</h1>
      <form onSubmit={onClick}>
        <input
          onChange={onChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          type="submit"
          style={{ backgroundColor: mouseOverButton ? "white" : "black" }}
          onMouseOver={overButton}
          onMouseOut={offButton}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
