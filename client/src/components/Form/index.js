import React from "react";


export function TextField(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}


export function buttonForm(props) {
  return (
    <button {...props} style={{marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}


