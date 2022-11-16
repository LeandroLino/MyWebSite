import Stars from "../../assets/stars.png";
import Container from "./styles";

const ImageLove = () => {
  
  return (
    <Container>
    <img id="stars" style={{position: "fixed", backgroundColor: "rgba(0,0,0, 0.8)", borderRadius: "50%"}} src={Stars}></img>
    </Container>
  )
}
export default ImageLove;
