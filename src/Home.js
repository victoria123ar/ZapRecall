import React from "react";
import Logo from "./assets/logo.png";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components"

export default function Jogo({ Jogar }) {
  return (
    <>
    <Titulo>
      <img src={Logo} alt="Logo" />
      <h1>ZapRecall</h1>
      <button onClick={Jogar}>Iniciar Recall!</button>
    </Titulo>
        <GlobalStyle />
        </>
  );
}

const Titulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    font-family: 'Recursive';
    background-color: #FB6B6B;

img{
    width: 136px;
}
h1{
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    color: #fff;

    margin-top: 20px;
    margin-bottom: 40px;
}

button{
    width: 246px;
    height: 54px;

    background-color: #fff;

    border: 1px solid #D70900;
    border-radius: 4px;
    box-shadow: -6px 6px 10px rgb(0, 0, 0, 0.15);

    font-family: 'Recursive';
    font-weight: 500;
    font-size: 18px;
    color: #D70900;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
}

button:hover{
  background-color: #D70900;

color: #fff;
}
`
