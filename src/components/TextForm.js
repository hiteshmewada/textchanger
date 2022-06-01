import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        
    }
    const handleClearClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText="";
        setText(newText);
        
    }
    const speak=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }
    const removeSymbols=()=>{
        const regex=/[0-9/A-Z/a-z/ /]/g;
        const letters=text.match(regex);
        const res1=letters.join('');
        setText(res1);
    }
    const wordCount=(text)=>{
        // let wodCount = text.match(/(\w+)/g).length;
        // return wodCount;
        // return text.replace(/\n/g," ").split('').filter(text=>text!=="").length;
        text = text.replace(/(^\s*)|(\s*$)/gi,""); //exclude  start and end white-space
        text = text.replace(/[ ]{2,}/gi," ");//2 or more space to 1
        text = text.replace(/\n /,"\n"); // exclude newline with a start spacing
        return text.split(' ').filter(function(text){return text!="";}).length;
        //return s.split(' ').filter(String).length; - this can also be used
    }
    const handleOnChange=(event)=>{
        // console.log("Handle On Change");
        // setText("Changed");
        setText(event.target.value)
    }
    const extractNum=()=>{
        const regex=/[0-9/ /]/g;
        const dig=text.match(regex);
        const res=dig.join('');
        setText(res);
    }
    const revText=()=>{
        // convert string to array
        let strArr=text.split("");
        // reverse
        strArr=strArr.reverse();
        // cnvert array to string
        let newText=strArr.join("");
        setText(newText);
    }
    const [text,setText]=useState("");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Enter your text below</label>
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} placeholder={"Enter your text here"}></textarea>
            </div>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Covert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Covert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Covert to Clear</button>
                <button className="btn btn-warning mx-2" onClick={speak}>Speak</button>
                <br />
                <button className="btn btn-primary mx-3" onClick={removeSymbols}>Remove all symbols</button>
                <button className="btn btn-primary mx-3" onClick={extractNum}>Extract Numbers</button>
                <button className="btn btn-primary my-3" onClick={revText}>Reverse Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text Summary:</h2>
            <p> {wordCount(text)} words and {text.length} characters</p>
            <p>{0.008*text.length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
