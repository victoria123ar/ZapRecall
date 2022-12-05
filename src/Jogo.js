import React from "react";
import styled from "styled-components";
import Perguntas from "./Perguntas";
import Logo from "./assets/logo.png";
import GlobalStyle from "./GlobalStyle";
import quizz from "./Quizz";

export default function App() {

  return (
    <>
      <Titulo>
        <img src={Logo} alt="Logo" />
        <h1>ZapRecall</h1>
      </Titulo>
      <Perguntas quizz={quizz}/>
      <GlobalStyle />
    </>
  );
}

const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom : 50px;

  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-weight: 400;
    font-size: 36px;
    color: #fff;

    margin-left: 20px;
  }
`;