import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-color: #282828;

  #stars {
    -webkit-animation:spin 120s linear infinite;
    -moz-animation:spin 120s linear infinite;
    animation:spin 120s linear infinite;
}

@-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}

  color: #fff; 
  font-family: "Poppins", sans-serif;
  
  display: flex;
  justify-content: center;
  align-items: flex-end;
  >span{
    width: 100vw;
    height: 100vh;
    background-color: #282828;
    display: flex;
    justify-content: center;

    >div:first-child{
      z-index: 1;
      position: relative;
      top: 10px;
      width: 100px;
    }
    

    >div{
      font-size: 25px;
        >div{
        width: 100%;
        display: flex;
        justify-content: center;

      }
      >div:first-child{
        font-size: 15px;
      }
      >div:last-child{
        font-size: 10px;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      position: absolute;
      bottom: 10px;
      background: rgb(0,0,0);
      border-radius: 10px;

      width: 200px;
      height: 75px;

      cursor: pointer;
  }
`;

export default Container;
