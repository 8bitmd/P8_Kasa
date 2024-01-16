import {useState} from "react";

export const Gallery = ({photos}) => {
    const [index, setIndex] = useState(0)

    function handleClick() {
        setIndex(index+1)
    }

    let currentPhoto = photos[index]
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <img src={currentPhoto}/>
        </>
    )
}