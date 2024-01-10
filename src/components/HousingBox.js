import "../styles/housing.css"
const data = require("../datas/logements.json")

export default function HousingBox() {
    return (
        <div className="housing">
            {data.map((housing) => (
                <div className="housing_box" key={housing.id}>
                    <img src={housing.cover}/>
                    <p>{housing.title}</p>
                </div>
            ))}
        </div>
    )
}