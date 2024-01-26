import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/accordion.css"

export const Accordion = ({title, content, className}) => {
    const [expanded, setExpand] = useState(false)
    const [clicked, setClicked] = useState(false)

    function handleExpand () {
        setExpand(!expanded)
    }

    function handleClicked () {
        setClicked(!clicked)
    }

    return (
        <div className={"accordion"}>
            <div onClick={() => {
                handleExpand()
                handleClicked()
            }}>
                <div className={"accordion_header"}>
                    <h2>{title}</h2>
                    <FontAwesomeIcon className={clicked ? "expanded_arrow" : "collapsed_arrow"}
                                     icon={faChevronUp}
                                     size={"2xl"}/>
                </div>
            </div>
            <div className={expanded ? `accordion_content ${className}` : null}>
                {expanded && <div className={"expanded_content"}><p>{content}</p></div>}
            </div>
        </div>
    )
}