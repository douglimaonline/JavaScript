import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function manageChange(event) {
    const { name, value } = event.target;

    setContact((preValue) => {
      let contact =
        name === "fName"
          ? {
              fName: value,
              lName: preValue.lName,
              email: preValue.email,
            }
          : name === "lName"
            ? {
                fName: preValue.fName,
                lName: value,
                email: preValue.email,
              }
            : {
                fName: preValue.fName,
                lName: preValue.lName,
                email: value,
              };
      return contact;
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={manageChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={manageChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={manageChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
