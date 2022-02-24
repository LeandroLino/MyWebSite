import DrawerContainer from "./styles";
const Header = () => {
  const redirect = (mode) => {
    switch (mode) {
      case "Linkedin":
        window.open("https://www.linkedin.com/in/leandro-lino/");
        break;
      case "Github":
        window.open("https://github.com/LeandroLino/");
        break;
      case "Gitlab":
        window.open("https://gitlab.com/LeandroLino/");
        break;
      case "Email":
        window.open(
          "https://drive.google.com/file/d/1J4vZ_WBGJyg2ISmJYB0sPdNFZcz5H0vQ/view?usp=sharing"
        );
        break;
    }
  };
  return (
    <DrawerContainer>
      <DrawerContainer.Linkedin
        onClick={() => redirect("Linkedin")}
        alt="Linkedin Logo"
      ></DrawerContainer.Linkedin>
      <DrawerContainer.Github
        onClick={() => redirect("Github")}
        alt="Github Logo"
      ></DrawerContainer.Github>
      <DrawerContainer.Gitlab
        onClick={() => redirect("Gitlab")}
        alt="Gitlab Logo"
      ></DrawerContainer.Gitlab>
      <DrawerContainer.Email
        onClick={() => redirect("Email")}
        alt="Email Logo"
      ></DrawerContainer.Email>
    </DrawerContainer>
  );
};

export default Header;
