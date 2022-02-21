import DrawerContainer from "./styles";
const Header = () => {
  const redirect = (mode) => {
    switch (mode) {
      case "Linkedin":
        window.open("https://www.linkedin.com/in/leandro-lino/");
      case "Github":
        window.open("https://github.com/LeandroLino/");
      case "Gitlab":
        window.open("https://gitlab.com/LeandroLino/");
      case "Email":
        window.open(
          "https://drive.google.com/file/d/1kPtOdJSq-sgva8GUVvQRXBjIUNshL3jZ/view?usp=sharing"
        );
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
