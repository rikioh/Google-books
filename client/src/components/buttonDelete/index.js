import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function buttonDelete(props) {
  return (
    <span className="button-Delete" {...props} role="button" tabIndex="0">
      Delete
    </span>
  );
}

export default buttonDelete;
