import { useEffect, useState } from "react";

import Caroussel from "../components/Caroussel";
import Error from "../components/Error";
import PageScrollerOptions from "../components/PageScrollerOptions";
import PageScrollerText from "../components/PageScrollerText";
import Tag from "../components/TAG";
import logements from "./logements.json"
import { useParams } from "react-router-dom";

export default function Buildings(){
    const [building, setBuilding] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        setBuilding(logements.filter(logement => logement.id === params.id)[0])
        setLoading(false);
    }, [])

    if (loading) {
        return <div>Chargement...</div>
    }
    else if (building === undefined) {
        return <div className="container">
            <Error />
        </div>
    }
    else {
        var maxrating = 5;
        var nostar = maxrating - parseInt(building.rating);
        return <div className="container">
        <Caroussel images={building.pictures} />
        <div className="building_informations">
            <div className="building_informations_left">
                <h1 className="building_title">{building.title}</h1>
                <p className="building_location">{building.location}</p>
                <div className="tag_list">
                    {building.tags.map((tag, index) => <Tag key={index} name={tag} />)}
                </div>
            </div>
            <div className="building_informations_right">
                <div className="informations_people">
                    <p>{building.host.name}</p>
                    <img width={"64px"} src={building.host.picture} />
                </div>
                <div className="informations_stars">
                    {[...Array(parseInt(building.rating))].map((star, index) => (
                        <img key={index} src="/images/full_star.png" />
                    ))}
                    {[...Array(nostar)].map((star, index) => (
                        <img key={index} src="/images/empty_star.png" />
                    ))}
                </div>
            </div>
        </div>
        <div className="building_description">
                <PageScrollerText name={"Description"} text={building.description} />
                <PageScrollerOptions name={"Equipements"} options={building.equipments} />
        </div>
    </div>
    }
}