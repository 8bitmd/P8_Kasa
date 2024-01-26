import {Hero} from "./Layout/Hero/Hero";
import HousingBox from "./Housing/HousingBox";
import "./Housing/housing.css"
import hero from "../assets/hero.png"
import DocumentTitle from "./DocumentTitle";

export default function Home() {
    DocumentTitle("Kasa - Accueil")
    return <div className={"main_container"}>
        <Hero text={"Chez vous, partout et ailleurs"} image={hero} alt={"Paysage de falaise au bord de la mer"} />
        <div>
            <HousingBox/>
        </div>
    </div>
}