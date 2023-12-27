import React, {useState} from "react";
import TextArea from "./TextArea";
import Preview from "./Preview";


const App = ()=>{

    const [typeText, setTypeText] = useState("")



    return(
        <div className="app">
            <div>
                <TextArea setTypeText = {setTypeText} typeText={typeText}/>
            </div>
            
            <div>
                <Preview typeText={typeText} />
            </div>
            
        </div>
    )
}

export default App;

