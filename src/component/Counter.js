import React, { useState } from 'react'

export default function Counter() {

  const [count, setCounter] = useState(0);
  // const [text, setText] = useState("");

  const countNumber = () => {
    setCounter(count + 1);
  }

  const handleClick = () => {
    let text = document.getElementById("myBox").value;
    document.getElementById("summary").innerText = text;
    
  }

  const handleChange = () => {
    let text = document.getElementById("myBox").value;
    document.getElementById("summary").innerText = text;
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='text-center'>
          <h1>{count}</h1>
          <button onClick={countNumber} className='btn btn-success'>Count</button>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="mb-3">
          <textarea className="form-control" onChange={handleChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>Submit</button>
        <div id='summary'></div>
      </div>
    </>
  )
}
