import Footer from "../components/Footer";
import Header from "../components/Header";
import Thumbnail from "../components/Thumb";
import logements from "./logements.json"
import { useEffect } from "react";

export default function Home(){
    
    useEffect(() => {
        console.log(logements)
    }, [])
    return (<div className="container">
        <Header />
        <img src="/images/BackgroundHome.png" />
        <div className="display-buildings">
            {logements.map((logement, index) => (
                <Thumbnail name={logement.title} url={logement.cover} id={logement.id} />
            ))}
        </div>
        <Footer />
    </div>
        
    )
}