import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 400, textAlign: "center", paddingTop: 120, clear: "both" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
