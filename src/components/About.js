import {Hero} from "./Hero";
import hero from "../assets/abouthero.jpg"

export default function About() {
    return (
        <div>
            <Hero image={hero} alt={"Paysage montagneux avec rivière au centre"} />
        </div>
    )
}