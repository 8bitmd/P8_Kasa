import Hero from "./Hero";
import HousingBox from "./HousingBox";
import "../styles/housing.css"

export default function Home() {
    return <div>
        <Hero />
        <div>
            <HousingBox/>
        </div>
    </div>
}