import {Tags} from "./Tags";
import {Equipments} from "./Equipments";
import NotFound from "./NotFound";
import {useLoaderData} from "react-router-dom";
import "../styles/housingpage.css"
import {Gallery} from "./Gallery";
import {Rating} from "./Rating";
import {Accordion} from "./Accordion";

const data = require("../data/logements.json")

// notion d'index, d'avance
const housing = {}
for (let item of data) {
    housing[item.id] = item
}

export async function houseLoader({ params }) {
    return housing[params.housingId]

    // ou
    // for (let item of data) {
    //     if (item.id === params.housingId) {
    //         return item
    //     }
    // }
}


//export const HousingPage = ({pictures, title, location, host, hostpic, tags, desctext, equiptext}) => {
export const HousingPage = () => {
    const house = useLoaderData()

    if (!house) {
        return <NotFound />
    }

    return (
        <div className={"housing_page"}>
            <Gallery photos={house.pictures}/>
            <div className={"top_section"}>
                <div className={"housingL"}>
                    <h1>{house.title}</h1>
                    <p className={"location"}>{house.location}</p>
                    <Tags tags={house.tags}/>
                </div>
                <div className={"housingR"}>
                    <div className={"host"}>
                        <img className={"host_picture"} src={house.host.picture}/>
                        <p className={"host_name"}>{house.host.name}</p>
                    </div>
                    <Rating rating={house.rating}/>
                </div>
            </div>

            <Accordion title={"Description"} content={house.description} />
            <Accordion title={"Équipements"} content={<Equipments equips={house.equipments}/>} />

        </div>
    )
}
