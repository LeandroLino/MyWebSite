import React, { useState, useEffect } from "react";
import {HeaderContainer, HeaderTitle, MainText, SubText} from "./styles"

// Componente Header
const Header = () => {
  const [navBar, setNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer navBar={navBar}>
      <HeaderTitle>
        <MainText>Lino</MainText>
        <SubText>.dev.br</SubText>
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;