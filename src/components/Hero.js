import logo from "../assets/hero.png"
import "../styles/hero.css"

export default function Hero() {
    return (
        <section className="hero">
            <img src={logo} alt="Paysage de falaise au bord de la mer" />
        </section>
    )
}