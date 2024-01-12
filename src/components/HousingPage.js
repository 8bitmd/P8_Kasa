import {Tags} from "./Tags";
import {Equipments} from "./Equipments";
import NotFound from "./NotFound";
import {useLoaderData} from "react-router-dom";
import "../styles/housingpage.css"
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
            <img src={house.pictures}/>
            <h1>{house.title}</h1>
            <p>{house.location}</p>
            <Tags tags={house.tags}/>
            <img src={house.host.picture}/>
            <p>{house.host.name}</p>
            <p>{house.rating}</p>
            <div className={"description_container"}>
                <div className={"desc_header"}>
                    <h2>Description</h2>
                    <FontAwesomeIcon size="xl" icon={faChevronUp} style={{color: "white",}}/>
                </div>
                <div className={"desc_content"}>
                    <p>{house.description}</p>
                </div>
            </div>
            <div className={"equipments_container"}>
                <div className={"equip_header"}>
                    <h2>Équipements</h2>
                    <FontAwesomeIcon size="xl" icon={faChevronUp} style={{color: "white",}}/>
                </div>
                <div className={"equip_content"}>
                    <Equipments equips={house.equipments}/>
                </div>
            </div>
        </div>
    )
}
