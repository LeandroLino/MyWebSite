import { useState } from "react";
import HeaderContainer from "./styles";
const Header = () => {
  const [navBar, setNav] = useState(false);
  const viewScroll = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", viewScroll);

  return (
    <HeaderContainer navBar={navBar}>
      <HeaderContainer.Title>
        <h1>Lino</h1>
        <div>.dev.br</div>
      </HeaderContainer.Title>
    </HeaderContainer>
  );
};

export default Header;
