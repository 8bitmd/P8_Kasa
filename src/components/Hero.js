import logo from "../assets/hero.png"
import "../styles/hero.css"

export default function Hero() {
    return (
        <section className="hero">
            <div></div>
            <p>Chez vous, partout et ailleurs</p>
            <img src={logo} alt="Paysage de falaise au bord de la mer"/>
        </section>
    )
}