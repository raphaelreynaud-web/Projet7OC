import { useState } from "react"

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
    
    return <div className="caroussel">
        <div className="car-left" onClick={(e) => previousImage()}>
            1
        </div>
        <div className="car-right" onClick={(e) => nextImage()}>
            2
        </div>
        <div className="car-img">
            <img src={carImages[carIndex]} alt="Test" />
        </div>
    </div>
}