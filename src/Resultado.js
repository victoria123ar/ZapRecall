import React from 'react';
import styled from "styled-components"

export default function Resultado(props) {
const {contador} = props;
const quantidadePerguntas = '8'

console.log(contador)

  return (
    <Rodape>
      <p>{contador}/{quantidadePerguntas} CONCLUÍDOS</p>
    </Rodape>
  );
}

const Rodape = styled.div`
    height: 70px;
    width: 100vw;

    background-color: #fff;

    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

p{
    font-size: 18px;
}
`