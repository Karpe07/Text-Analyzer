import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
  const [text, setText] = useState("")
  // setText("Enter the text"); //corrected way to update text
  const handleUpClick = () => {
    // console.log("Upper button has been clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to UpperCase!!", "success")
  }

  const handleLoClick = () => {
    // console.log("Upper button has been clicked" + text)
    let newText1 = text.toLowerCase()
    setText(newText1)
    props.showAlert("Converted to LowerCase!!", "success")
  }

  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value)
  }

  const handleSpClick = () => {
    let voice = new SpeechSynthesisUtterance()
    voice.text = text
    window.speechSynthesis.speak(voice)
    props.showAlert("Task Completed!!", "success")
  }

  const handleClClick = () => {
    let newText = ""
    setText(newText)
    props.showAlert("Text cleared successfully!!", "success")
  }


  return (
    <div className={`text-${props.mode === 'light'?'dark' : 'light'}`}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} placeholder='Enter text here' onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handleSpClick}>Tab to Speak</button>
      <button className='btn btn-primary mx-2' onClick={handleClClick}>Clear</button>


      <div className="container my-3">
        <h2>Your Text Summary </h2>
        <p>{text.split(" ").length} words and {text.length} charactor's</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview Text</h2>
        <p>{text.length>0?text:"Enter something to preview the text"}</p>
      </div>
    </div>
  )
}

