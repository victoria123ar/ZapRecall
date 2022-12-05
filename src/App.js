import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Home from "./Home";
import Jogo from "./Jogo";
import { useState } from "react";

export default function App() {
  const [jogo, setJogo] = useState(false);

  return (
    <Conteudo>
      <GlobalStyle />
      {jogo ? <Jogo /> : <Home abrirJogo={() => setJogo(true)} />}
    </Conteudo>
  );
}

const Conteudo = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  font-family: "Recursive";
  background-color: #fb6b6b;
`;
