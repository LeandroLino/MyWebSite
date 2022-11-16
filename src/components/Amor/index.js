import Container from "./styles";
import React from "react";
import Stars from "../../assets/stars.png";
import mySound from "../../assets/music.mp3";
import ImageLove from "components/ImageRotate";
import useSound from 'use-sound'

const LoveComponent = () => {
  const [playSound] = useSound(mySound)

  return (
    <Container > <button id="button" onClick={playSound()}>
 </button>
      <span>
        <div> L + M </div>
        <ImageLove style={{position: "fixed", backgroundColor: "rgba(0,0,0, 0.8)", borderRadius: "50%"}} src={Stars}></ImageLove>
        <div>
          <div>
          Guarulhos - SP
          </div>
          <div>
          03.05.20
          </div>
          <div>
          -23.425590°S / -46.416060°W
          </div>
        </div>
      </span>
    </Container>
  );
};

export default LoveComponent;
