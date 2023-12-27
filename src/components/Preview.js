// Preview.jsx
import React from "react";

const Preview = ({ typeText }) => {
  return (
    <div className="preview">
      <h1 className="loading">{typeText.slice(1)}</h1>
    </div>
  );
};

export default Preview;
