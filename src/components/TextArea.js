import React from "react";


const TextArea = ({setTypeText, typeText}) =>{





    return(
        <div className="textarea">
            <textarea type="text"
            onChange={(e) => setTypeText(e.target.value)}
            value={typeText} 
            />
        </div>
    )
}

export default TextArea;