import "../styles/hero.css"

export const Hero = ({text, image, alt}) => {
        return (
            <section className="hero">
                <div></div>
                <p>{text}</p>
                <img src={image} alt={alt} />
            </section>
        )
}