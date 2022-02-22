import Container from "./styles";
const TechCard = ({ placeHolder, img, selectTech }) => {
  return (
    <Container>
      <img src={img}></img>
      <div>{placeHolder}</div>
    </Container>
  );
};
export default TechCard;
