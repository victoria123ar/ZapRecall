import React from 'react';
import Pergunta from "./Pergunta"

export default function Perguntas (props){
    const {quizz}  = props

    return(
        <>
            {quizz.map((p) => <Pergunta key={p.topico} topico={p.topico} pergunta ={p.pergunta} resposta={p.resposta}/>)}
        </>
    )
}