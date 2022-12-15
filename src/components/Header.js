import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Header(){
    return <div className="container">
        <div className="header">
            <div className="header_name">
                <p>K</p>
                <p>A</p>
                <p>S</p>
                <p>A</p>
            </div>
            <div className="header_menu">
                <ul className="header_menu_list">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/logement">A propos</a></li>
                </ul>
            </div>
        </div>
    </div>
}