import {Hero} from "../Layout/Hero/Hero";
import hero from "../../assets/abouthero.jpg"
import {Accordion} from "../Accordion";
import "./about.css"
import DocumentTitle from "../DocumentTitle";

export default function About() {
    DocumentTitle("Kasa - À propos")
    return (
        <div className={"main_container"}>
            <Hero image={hero} alt={"Paysage montagneux avec rivière au centre"} />
            <div className="about_accordions_container">
                <Accordion title={"Fiabilité"}
                           content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
                <Accordion title={"Respect"}
                           content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
                <Accordion title={"Service"}
                           content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} />
                <Accordion title={"Sécurité"}
                           content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />
            </div>
        </div>
    )
}