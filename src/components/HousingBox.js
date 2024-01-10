import "../styles/housing.css"
import {Link} from "react-router-dom";
const data = require("../datas/logements.json")

export default function HousingBox() {
    return (
        <div className="housing">
            {data.map((housing) => (
                <Link to={`/${housing.id}`}>
                    <div className="housing_box" key={housing.id}>
                        <img src={housing.cover}/>
                        <p>{housing.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}