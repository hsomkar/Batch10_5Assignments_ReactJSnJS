import React, { useState } from "react";

import "./App.css";

const App = () => {
  //  Counter initialized to 0
  const [counter, setCounter] = useState(0);

  // increment the counter
  const increase = () => {
    setCounter(counter + 1);
  };
  // reset the counter
  const reset = () => {
    setCounter(0);
  };
  // decrement the counter
  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      Counter
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh",
        }}
      >
        {counter}
      </div>
      <div className="buttons">
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={increase}
        >
          Increment
        </button>
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "peru",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={reset}
        >
          Reset
        </button>
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={decrease}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
