import React from 'react';
import styled from "styled-components"
import play from './assets/seta_play.png'
import virar from './assets/seta_virar.png'

export default function Pergunta(props) {
    const {topico, pergunta, resposta} = {...props};
  return (
    <Card>
      <div className="perguntaFechada">
        <p>Pergunta {topico}</p>
        <img src={play} alt="Play" />
      </div>
      <Botoes>
      </Botoes>
    </Card>
  );
}

const Card = styled.div`
  .perguntaFechada {
    max-width: 300px;
    width: 100vw;
    height: 65px;

    background-color: #fff;

    border-radius: 5px;
    box-shadow: -6px 6px 10px rgb(0, 0, 0, 0.15);

    margin-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & > p {
      font-weight: bold;
      font-size: 16px;
      color: #333333;
    }
    & > img {
      cursor: pointer;
    }
  }

  .perguntaAberta {
    max-width: 300px;
    width: 100vw;
    height: 131px;

    padding: 16px;
    margin-bottom: 20px;

    border-radius: 5px;
    box-shadow: -6px 6px 10px rgb(0, 0, 0, 0.15);

    background-color: #ffffd4;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    & > p {
      font-weight: 400;
      font-size: 18px;
    }

    & > img {
      position: absolute;
      bottom: 10px;
      right: 10px;

      cursor: pointer;
    }
  }
`;

const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const BotaoVermelho = styled.button`
  width: 85px;
  height: 37px;

  font-family: "Recursive";
  font-size: 12px;
  text-align: center;
  color: #ffffff;

  background-color: red;

  border-radius: 5px;
  border: 1px solid red;

  margin-right: 7.5px;

  cursor: pointer;
`;

const BotaoLaranja = styled.button`
  width: 85px;
  height: 37px;

  font-family: "Recursive";
  font-size: 12px;
  text-align: center;
  color: #ffffff;

  background-color: orange;

  border-radius: 5px;
  border: 1px solid orange;

  margin-right: 7.5px;

  cursor: pointer;
`;

const BotaoVerde = styled.button`
  width: 85px;
  height: 37px;

  font-family: "Recursive";
  font-size: 12px;
  text-align: center;
  color: #ffffff;

  background-color: green;

  border-radius: 5px;
  border: 1px solid green;

  margin-right: 7.5px;

  cursor: pointer;
`;

const Resposta = styled.p`
  .vermelho {
    text-decoration-line: line-through;
    text-decoration-color: #ff3030;
    color: #ff3030;
  }

  .laranja {
    text-decoration-line: line-through;
    text-decoration-color: #ff922e;
    color: #ff922e;
  }

  .verde {
    text-decoration-line: line-through;
    text-decoration-color: #2fbe34;
    color: #2fbe34;
  }
`;
