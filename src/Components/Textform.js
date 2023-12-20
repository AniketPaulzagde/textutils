import React, { useState } from 'react'


export default function Textform(props) {


    const handleUpClick = () => {
        //console.log("UpperCase was clicked" + Text);
        let newText = Text.toUpperCase();
        SetText(newText)
        props.showAlert("UpperCase is Enabled" , "Success");
    }

    const handleLoClick = () => {
        //console.log("UpperCase was clicked" + Text);
        let newText = Text.toLowerCase();
        SetText(newText)
        props.showAlert("LowerCase is Enabled" , "Success");
    }

    const handleClearClick = () => {
        //console.log("UpperCase was clicked" + Text);
        let newText = "";
        SetText(newText)
        props.showAlert("Text is Cleared" , "Success");
    }

    const handleTrimClick = () => {
        //console.log("UpperCase was clicked" + Text);
        let newText = Text.trim();
        SetText(newText)
        props.showAlert("Text is Trim" , "Success");
    }

    const handlecopy = () =>{
        navigator.clipboard.writeText(Text);
        props.showAlert("Text is Copied" , "Success");
    }

    const handleonchange = (event) => {
        // console.log("On Change");
        SetText(event.target.value);
    }

    const [Text, SetText] = useState('');
    return (
        <>
            <div className="container" style={{color :props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 >{props.heading} -</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor :props.mode === 'dark' ? 'white' : 'white' , color :props.mode === 'dark' ? 'black' : 'black' }} id="myBox" value={Text} onChange={handleonchange} rows="15"></textarea>
                </div>
                <button disabled={Text.length===0} className="btn btn-light mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={Text.length===0} className="btn btn-light mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={Text.length===0} className="btn btn-light mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={Text.length===0} className="btn btn-light mx-1 my-1" onClick={handleTrimClick}>Trim Text</button>
                <button disabled={Text.length===0} className="btn btn-light mx-1 my-1" onClick={handlecopy}>Copy Text</button>

            </div>
            <div className="container my-3" style={{color :props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summery</h2>
                <p>{Text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {Text.length} Characters</p>
                <p>{0.8 * Text.split(" ").filter((element) =>{return element.length!==0}).length}  Minutes to read</p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Enter the text in the textbox to preview"}</p>
            </div>
        </>
    )
}
