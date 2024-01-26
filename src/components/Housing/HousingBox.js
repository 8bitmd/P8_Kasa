import "./housing.css"
import {Link} from "react-router-dom";
const data = require("../../data/logements.json")

export default function HousingBox() {
    return (
        <div className="housing">
            {data.map((housing) => (
                <Link to={`/${housing.id}`}>
                    <div className="housing_box" key={housing.id}>
                        <div className="gradient"></div>
                        <img src={housing.cover}/>
                        <p>{housing.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}