// src/components/ErrorMessage.js
import React from "react";
import "./ErrorMessage.css";
import Button from "./Button";

function ErrorMessage({ onRetry }) {
  return (
    <div className="error-message" role="alert" aria-live="assertive">
      <p className="main-message">Something went wrong</p>
      <p className="sub-message">Please retry by clicking the button below</p>
      <Button onClick={onRetry}>Try again</Button>
    </div>
  );
}

export default ErrorMessage;
