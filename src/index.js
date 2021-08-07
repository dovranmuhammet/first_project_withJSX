// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component

const App = () => {
  const changeNameSubmit = "Click me";
  const textLabel = "Enter name:";
  // const style = {
  //   backgroundColor: "blue",
  //   color: "white",
  // };

  return (
    <div>
      <label className="labe_jsx" htmlFor="name">
        {textLabel}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {changeNameSubmit}
      </button>
      {/* <button style={style}>{changeNameSubmit}</button> */}
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
