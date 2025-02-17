// src/components/Button.js
import React from "react";
import "./Button.css";

function Button({ onClick, children }) {
  return (
    <button className="button" onClick={onClick} aria-pressed="false">
      {children}
    </button>
  );
}

export default Button;
