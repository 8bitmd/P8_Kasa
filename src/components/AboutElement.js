import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import "../styles/aboutelement.css"

export const AboutElement = ({title, content}) => {
    return (
        <div className="element_container">
            <div className="element_header">
                <h1>{title}</h1>
                <FontAwesomeIcon size="xl" icon={faChevronUp} style={{color: "#ffffff",}}/>
            </div>
            <div className="element_content">
                <p>{content}</p>
            </div>
        </div>
    )
}