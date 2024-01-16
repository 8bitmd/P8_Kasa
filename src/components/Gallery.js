import {useState} from "react";

export const Gallery = ({photos}) => {
    const [index, setIndex] = useState(0)
    function nextPhoto() {
        index >= photos.length - 1 ? setIndex(0) : setIndex(index + 1)
    }

    function previousPhoto() {
        index <= 0 ? setIndex(photos.length - 1) : setIndex(index - 1)
    }

    let currentPhoto = photos[index]
    return (
        <>

            <button onClick={previousPhoto}>
                <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z"
                        fill="white"/>
                </svg>
            </button>
            <button onClick={nextPhoto}>
                <svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.959961 72.9877L8.03996 80.0677L47.64 40.4677L8.03996 0.867676L0.959961 7.94768L33.48 40.4677L0.959961 72.9877Z" fill="white"/>
                </svg>
            </button>
            <img src={currentPhoto}/>
        </>
    )
}