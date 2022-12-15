import { useState } from "react"

export default function PageScrollerOptions({name, options}){
    const [open, setOpen] = useState(false);
    return <div className="pagescroller">
        <div className="pagescroller_name" onClick={(e) => setOpen(!open)}>
            <p>{name}</p>
            {open ? <img src="/images/VectorTop.png" alt="VectorTop"/> : <img src="/images/VectorBot.png" alt="VectorBot"/>}
        </div>
        {open ?<div className="pagescroller_options">
            <ul className="pagescroller_options_list">
                {options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div> : 
        <div></div>}
    </div>
}