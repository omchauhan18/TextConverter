import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase!", "success");
  }

  const handleCopyTextOnClick =() =>{
    navigator.clipboard.writeText(text);  //This functions helps to copy the text.
    props.showAlert(" Copied to clipboard!", "success");
  }

  const handleloClick = ()=>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase!", "success");
  }
  
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");


// setText("New text");
  return (
  <>
    <div className='container' style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>
            {props.heading}
        </h1>
        <div className="mb-3">
            {/* <label for="exampleFormControlTextarea1" className="form-label">Enter the text:</label> */}
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8" 
            style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPER-CASE</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lower-case</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyTextOnClick}>Copy text</button>
        
    </div>
    <div className="container my-2"  style={{color: props.mode ==='dark'?'white':'black'}}>
      <h2>Your text summary </h2>
      <p>{text.split(" ").length-1} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}m took time to read in minutes.</p>
      <h2>Preview</h2>
      <p>{text.length>1?text:"Enter something in the above text-box to preview it here"}</p>
      </div>
    </>
  )
}
