import { useState } from "react"
import Edit from "../../images/edit.png"
import pen from "../../images/pen.png"

const Notes = ()=>{
    const [text, setText] = useState(JSON.parse(window.localStorage.getItem("text")))
    // console.log(text)
    const handleChange=(e)=>{
        setText(e.target.value)
        window.localStorage.setItem("text",JSON.stringify(text))
    }
    return(
       <div className="Notes-container">
        <p id="All-notes">All notes</p>
        <textarea className="Text-area" value={text} onChange={(e)=>handleChange(e)}/>
        <img src={Edit} id="Edit-img"/>
        <img src={pen} id="pen-img"/>
       </div>
    )
}

export default Notes