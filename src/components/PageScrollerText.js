import { useState } from "react"

export default function PageScrollerText({name, text}){
    const [open, setOpen] = useState(false);
    return <div className="pagescroller">
        <div className="pagescroller_name" onClick={(e) => setOpen(!open)}>
            <p>{name}</p>
            {open ? <img src="/images/VectorTop.png" alt="VectorTop"/> : <img src="/images/VectorBot.png" alt="VectorBot"/>}
        </div>
        {open ?<div className="pagescroller_text">
            <p className="pagescroller_text_content">
                {text}
            </p>
        </div> : 
        <div></div>}
    </div>
}