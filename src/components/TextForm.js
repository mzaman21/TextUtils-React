import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text, seText] = useState("");
    const handleOnChange = (event)=>{
        seText(event.target.value)
    }
    const handleUpClick = ()=>{
        let UppercaseText = text.toUpperCase();
        seText(UppercaseText);
    }
    const handleLoClick = ()=>{
        let UppercaseText = text.toLowerCase();
        seText(UppercaseText);
    }
    const handleCtClick = ()=>{
        let clearText = '';
        seText(clearText);
    }
  return (
    <>
    <div className="mb-3">
        <h1 style={{color:props.mode==="light"?'black':'white'}}>Enter your text below to analyze</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?'white':'#042743',color:props.mode==="light"?'black':'white'}} id="ftextarea" rows="8"></textarea>
        <button className='btn btn-primary my-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleCtClick}>Clear Text</button>
    </div>
    <div className={`container  text-${props.mode==="light"?'dark':'light'}`}>
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} Words & {text.length} characters</p>
        <p>{text.split(" ").length*0.008}  Minutes Reading Time</p>

    </div>
    </>
  )
}
