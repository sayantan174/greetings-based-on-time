import React from "react";

let greeting = "";
const date = new Date();
const cssStyle = {};
if (date.getHours() >= 1 && date.getHours() <= 11) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (date.getHours() >= 12 && date.getHours() <= 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

function App() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"#aee9e1"
        }}
      >
        <h1
          style={{
            backgroundColor: "#ffe8c5",
            padding: "1rem",
            borderRadius: ".5rem",
            color: "#ff9b8e",
            fontSize:"4rem",
          }}
        >
          Hello Sir, <span style={{ color: cssStyle.color }}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
