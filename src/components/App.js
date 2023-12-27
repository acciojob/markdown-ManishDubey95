import React, { useState, useEffect } from "react";
import TextArea from "./TextArea";
import Preview from "./Preview";

const App = () => {
  const [typeText, setTypeText] = useState("");

  useEffect(() => {
    // This block of code will run whenever typeText changes
    console.log("TypeText has changed:", typeText);
  }, [typeText]);

  return (
    <div className="app">
      <div>
        <TextArea setTypeText={setTypeText} typeText={typeText} />
      </div>

      <div>
        <Preview typeText={typeText} />
      </div>
    </div>
  );
};

export default App;
