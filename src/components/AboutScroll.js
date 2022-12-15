import { useState } from "react"

export default function AboutScrollerText({name, text}){
    const [open, setOpen] = useState(false);
    return <div className="aboutscroller">
        <div className="aboutscroller_name" onClick={(e) => setOpen(!open)}>
            <p>{name}</p>
            {open ? <img src="/images/VectorTop.png" alt="VectorTop"/> : <img src="/images/VectorBot.png" alt="VectorBot"/>}
        </div>
        {open ?<div className="aboutscroller_text">
            <p className="aboutscroller_text_content">
                {text}
            </p>
        </div> : 
        <div></div>}
    </div>
}