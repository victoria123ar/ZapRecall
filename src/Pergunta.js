import React from "react";
import styled from "styled-components";
import play from "./assets/seta_play.png";
import virar from "./assets/seta_virar.png";
import { useState } from "react";
import erro from "./assets/icone_erro.png";
import quase from "./assets/icone_quase.png";
import certo from "./assets/icone_certo.png";

let numero = 0


export default function Pergunta(props) {
  const {topico, pergunta, resposta} = { ...props };
  const [contador, setContador] = useState(0);
  const [questao, setQuestao] = useState("perguntaFechada");
  const [texto, setTexto] = useState(topico);
  const [botao, setBotao] = useState(play);
  const [mostrarBotoes, setMostrarBotoes] = useState(false);
  const [cor, setCor] = useState('')
  const quantidadePerguntas = '8'

  function abrirPergunta() {
    if (botao === play) {
      setQuestao("perguntaAberta");
      setTexto(pergunta);
      setBotao(virar);
    }
    if (botao === virar) {
      setTexto(resposta);
      setBotao("");
      setMostrarBotoes(true);
    }
  }
  
  function respostaFinal(r){
    numero  = numero + 1;
    setContador(numero)
    
    if (r==='erro'){
        setQuestao("perguntaFechada");
        setTexto(topico);
        setCor("vermelho");
        setBotao(erro);
        setMostrarBotoes(false);
    }
    if (r==='quase'){
        setQuestao("perguntaFechada");
        setTexto(topico);
        setCor("laranja");
        setBotao(quase);
        setMostrarBotoes(false);
    }
    if (r==='certo'){
        setQuestao("perguntaFechada");
        setTexto(topico);
        setCor("verde");
        setBotao(certo);
        setMostrarBotoes(false);
   }

  }
  
  console.log(contador)
  
    return (
      <>
      <Card data-test='flashcard'>
        <div className={questao}>
          <Resposta>
            <p data-test='flashcard-text' className={cor}>{texto}</p>
          </Resposta>
          <img data-test='play-btn' onClick={() => abrirPergunta()} src={botao} alt={botao} />
            <Botoes>
              {mostrarBotoes ? <BotaoVermelho data-test='no-btn' onClick={() => respostaFinal('erro')}>Não lembrei</BotaoVermelho> : true}
              {mostrarBotoes ? (
                <BotaoLaranja data-test='partial-btn' onClick={() => respostaFinal('quase') }>Quase não lembrei</BotaoLaranja>
              ) : (
                true
              )}
              {mostrarBotoes ? <BotaoVerde data-test='zap-btn' onClick={() => respostaFinal('certo')}>Zap!</BotaoVerde> : true}
            </Botoes>
            </div>
      </Card>
          <Rodape>
          <p>{contador}/{quantidadePerguntas} CONCLUÍDOS</p>
        </Rodape>
        </>
)
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
`;

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