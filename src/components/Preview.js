// Preview.jsx
import React from "react";

const Preview = ({ typeText }) => {
  // Split the text based on newline characters
  const lines = typeText.split('\n');

  // Find the first line that starts with '#' and extract the content
  const contentAfterHash = lines.find(line => line.trim().startsWith('#'));

  // Display the extracted content without any markdown formatting
  const displayedText = contentAfterHash ? contentAfterHash.replace(/^#\s*/, '') : typeText;

  return (
    <div className="preview">
      <h1 className="loading">{displayedText}</h1>
    </div>
  );
};

export default Preview;

