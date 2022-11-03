import { useState, useEffect } from "react";
import Stars from "../../assets/stars.png";

const ImageLove = () => {
  const [isClicked,  setClickState] = useState(false)

  const rotateImage = (e) => {
    if(!isClicked){return false} 
    var face = document.getElementById("stars");
    var faceX = face.offsetLeft+ face.offsetWidth/2;
    var faceY = face.offsetTop + face.offsetHeight/2;
    var dX = faceX - e.clientX;
    var dY = faceY - e.clientY;
    var degree = Math.atan(- dX / dY) * 180 / Math.PI;
    if (dY > 0){degree += 180}
    if(isClicked){face.style.transform = "rotate("+degree+"deg)"} 
    return true
  }

  useEffect(() => {
      window.addEventListener('mousemove', rotateImage);
      return () => {
        window.removeEventListener(
          'mousemove',
          rotateImage
        );
      };
  }, [isClicked]);

  return (
    <img onMouseDown={()=> setClickState(!isClicked)} id="stars" style={{position: "fixed", backgroundColor: "rgba(0,0,0, 0.8)", borderRadius: "50%"}} src={Stars}></img>
  )
}
export default ImageLove;
