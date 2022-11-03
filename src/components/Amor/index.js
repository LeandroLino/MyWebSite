import Container from "./styles";
import Stars from "../../assets/stars.png";
import ImageLove from "components/ImageRotate";

const LoveComponent = () => {
  return (
    <Container >
      <span>
        <div> L + M </div>
        <ImageLove style={{position: "fixed", backgroundColor: "rgba(0,0,0, 0.8)", borderRadius: "50%"}} src={Stars}></ImageLove>
        <div>
          <div>
          São Paulo
          </div>
          <div>
          04.05.20
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
