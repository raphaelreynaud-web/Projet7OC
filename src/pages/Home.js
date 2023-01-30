import Footer from "../components/Footer";
import Header from "../components/Header";
import Thumbnail from "../components/Thumb";
import logements from "./logements.json"
import { useEffect } from "react";

export default function Home(){
    return (<div className="container">
        <div className="main-bg">
            <div className="main-bg-text">
            </div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="display-buildings">
            {logements.map((logement, index) => (
                <Thumbnail key={index} name={logement.title} url={logement.cover} id={logement.id} />
            ))}
        </div>
    </div>
        
    )
}