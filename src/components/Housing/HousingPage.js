import {Tags} from "./Tags";
import {Equipments} from "./Equipments";
import NoMatch from "../Layout/NoMatch";
import {useLoaderData} from "react-router-dom";
import "./housingpage.css"
import {Gallery} from "./Gallery";
import {Rating} from "./Rating";
import {Accordion} from "../Accordion";
import DocumentTitle from "../DocumentTitle";

const data = require("../../data/logements.json")

const housing = {}
for (let item of data) {
    housing[item.id] = item
}

export async function houseLoader({ params }) {
    return housing[params.housingId]
}

export const HousingPage = () => {
    const house = useLoaderData()

    if (!house) {
        return <NoMatch />
    }

    DocumentTitle("Kasa - " + house.title)
    return (
        <div className={"housing_page main_container"}>
            <Gallery photos={house.pictures}/>
            <div className={"top_section"}>
                <div className={"housing_left"}>
                    <h1>{house.title}</h1>
                    <p className={"location"}>{house.location}</p>
                    <Tags tags={house.tags}/>
                </div>
                <div className={"housing_right"}>
                    <div className={"host"}>
                        <p className={"host_name"}>{house.host.name}</p>
                        <img className={"host_picture"} src={house.host.picture} alt={"Hôte"}/>
                    </div>
                    <Rating rating={house.rating}/>
                </div>
            </div>
            <div className={"housing_accordions_container"}>
                <Accordion title={"Description"} content={house.description} />
                <Accordion className={"housing_equipments"} title={"Équipements"} content={<Equipments equips={house.equipments}/>} />
            </div>
        </div>
    )
}
