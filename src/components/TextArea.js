// TextArea.jsx
import React from "react";

const TextArea = ({ setTypeText, typeText }) => {
  return (
    <div>
      <textarea
        type="text"
        onChange={(e) => setTypeText(e.target.value)}
        value={typeText}
        className="textarea"
      />
    </div>
  );
};

export default TextArea;

