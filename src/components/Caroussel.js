import { useState, useEffect } from "react"

export default function Caroussel({images}){
    const [carImages, setCarImages] = useState(images)
    const [carIndex, setCarIndex] = useState(0)
    
    function nextImage(){
        if (carIndex < carImages.length - 1){
            setCarIndex(carIndex + 1)
        } else {
            setCarIndex(0)
        }
    }
    function previousImage(){
        if (carIndex > 0){
            setCarIndex(carIndex - 1)
        } else {
            setCarIndex(carImages.length - 1)
        }
    }

    useEffect(() => {
        setCarImages(images)
    }, [images])
    
    return <div className="caroussel">
        {carImages.length > 1 ? <div className="car-left" onClick={(e) => previousImage()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" fill="white"></path> </svg>
        </div> : <div></div>}
        {carImages.length > 1 ? <div className="car-right" onClick={(e) => nextImage()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
        </div> : <div></div>}
        <div className="car-middle">
            {carIndex + 1}/{carImages.length}
        </div>
        <div className="car-img">
            <img src={carImages[carIndex]} alt="Test" />
        </div>
    </div>
}