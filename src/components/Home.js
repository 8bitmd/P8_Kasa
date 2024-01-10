import {Hero} from "./Hero";
import HousingBox from "./HousingBox";
import "../styles/housing.css"
import hero from "../assets/hero.png"

export default function Home() {
    return <div>
        <Hero text={"Chez vous, partout et ailleurs"} image={hero} alt={"Paysage de falaise au bord de la mer"} />
        <div>
            <HousingBox/>
        </div>
    </div>
}