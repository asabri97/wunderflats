// src/components/Loading.js
import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading" role="status" aria-live="polite">
      <p>Loading homes in Berlin...</p>
    </div>
  );
}

export default Loading;
