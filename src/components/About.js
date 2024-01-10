import {Hero} from "./Hero";
import 'material-icons/iconfont/material-icons.css';
import hero from "../assets/abouthero.jpg"
import {AboutElement} from "./AboutElement";

export default function About() {
    return (
        <div>
            <Hero image={hero} alt={"Paysage montagneux avec rivière au centre"} />
            <div className="about_elements">
                <AboutElement title={"Fiabilité"} content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."} />
                <AboutElement title={"Respect"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} />
                <AboutElement title={"Service"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} />
                <AboutElement title={"Sécurité"} content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />
            </div>
        </div>
    )
}