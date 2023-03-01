import React,{useState} from "react";



export default function TextForm(props) {
   
  
  
  // here same with help of hook useState , call function handleUpClick and introduce new let variable and convert into Uppercase
  const handleUpClick = ()=>{
    console.log("Uppercase was Clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
   }

  // here I am using textarea onChange event with javaScripty and I am using this event function with setText hook
 const handleOnChange=(event)=>{
  console.log("On change");
  setText(event.target.value)
 }
  // this is a state which is first hook I am using ti create state so i can use without class component function
  const[text, setText] = useState('Enter text here');
  return (
    <div>
  <h1>{props.heading}-{text}</h1>   
  <div className="mb-3">
    <label For="myBox" className="form-label">Example textarea</label>
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
    <button className="btn btn-primary"onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    </div>
  );
}