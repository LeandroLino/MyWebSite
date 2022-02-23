import { useEffect, useState } from "react";
import Container from "./styles";
import Arrow from "../../assets/Arrow.svg";
import { itens } from "../../assets/projectItens";
const Carroussel = () => {
  const [currentItem, setNewItem] = useState(0);

  const showNewItem = async (opr) => {
    switch (opr) {
      case "remove":
        if (currentItem - 1 < 0) {
          setNewItem(itens.length - 1);
          break;
        }
        setNewItem(currentItem - 1);
        break;
      case "add":
        if (currentItem + 1 > itens.length - 1) {
          setNewItem(0);
          break;
        }
        setNewItem(currentItem + 1);
        break;
    }
  };
  return (
    <Container>
      <div>Projetos</div>
      <Container.Item>
        <span onClick={() => showNewItem("remove")}>
          <img src={Arrow}></img>
        </span>
        <div
          onClick={() => window.open(itens[currentItem].link)}
          className="Name"
        >
          {itens[currentItem].name}
        </div>
        <img
          onClick={() => window.open(itens[currentItem].link)}
          src={itens[currentItem].image}
        ></img>
        <span onClick={() => showNewItem("add")}>
          <img src={Arrow}></img>
        </span>
      </Container.Item>
    </Container>
  );
};

export default Carroussel;
