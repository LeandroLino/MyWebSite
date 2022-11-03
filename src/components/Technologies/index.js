import Container from "./styles";
import JS from "assets/Technologies/Javascript.svg";
import Html from "assets/Technologies/Html.png";
import CSS from "assets/Technologies/CSS.png";
import Python from "assets/Technologies/Python.png";
import Django from "assets/Technologies/Django.png";
import React from "assets/Technologies/React.png";
import Vue from "assets/Technologies/Vue.png";
import Mysql from "assets/Technologies/Mysql.svg";
import MongoDb from "assets/Technologies/MongoDb.svg";
import Postgresql from "assets/Technologies/Postgresql.svg";
import TechCard from "components/TechCard";

const Technologies = () => {
  const techs = [
    { name: "JS", icon: JS, placeHolder: "Javascript" },
    { name: "REACT", icon: React, placeHolder: "React.js" },
    { name: "VUE", icon: Vue, placeHolder: "Vue.js" },
    { name: "CSS", icon: CSS, placeHolder: "CSS3" },
    { name: "HTML", icon: Html, placeHolder: "HTML5" },
    { name: "PYTHON", icon: Python, placeHolder: "Python" },
    { name: "DJANGO", icon: Django, placeHolder: "Django" },
    { name: "MYSQL", icon: Mysql, placeHolder: "MySql" },
    { name: "MONGODB", icon: MongoDb, placeHolder: "MongoDb" },
    { name: "POST", icon: Postgresql, placeHolder: "Postgresql" },
  ];
  return (
    <Container>
      <div>
        <div>Tecnologias </div>
        <div>({techs.length})</div>
      </div>
      <div>
        <Container.Icons>
          {techs.map((value, index) => (
            <TechCard
              key={index}
              placeHolder={value.placeHolder}
              img={value.icon}
            ></TechCard>
          ))}
        </Container.Icons>
      </div>
    </Container>
  );
};

export default Technologies;
