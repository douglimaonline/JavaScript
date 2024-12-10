import React, { useState } from "react";

function App() {
  var [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });

  function changeName(event) {
    const { value, name } = event.target;

    //   setFullName((preValue) => {
    //     if (name === "fName") {
    //       return {
    //         firstName: value,
    //         lastName: preValue.lastName,
    //       };
    //     } else if (name === "lName") {
    //       return {
    //         firstName: preValue.firstName,
    //         lastName: value,
    //       };
    //     }
    //   });

    setFullName((preValue) => {
      var fullName =
        name === "fName"
          ? {
              firstName: value,
              lastName: preValue.lastName,
            }
          : {
              firstName: preValue.firstName,
              lastName: value,
            };
      return fullName;
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={changeName}
          value={fullName.firstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={changeName}
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
