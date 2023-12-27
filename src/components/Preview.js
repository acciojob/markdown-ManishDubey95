import React from "react";

const Preview = ({ typeText }) => {
  const renderMarkdown = () => {
    return { __html: typeText };
  };

  return (
    <div className="preview">
      <div dangerouslySetInnerHTML={renderMarkdown()} />
    </div>
  );
};

export default Preview;
