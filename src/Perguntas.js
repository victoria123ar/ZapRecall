import React from 'react';
import Pergunta from "./Pergunta"
import Resultado from './Resultado';
import { useState } from "react";

export default function Perguntas (props){
    const {quizz}  = props
    const [contador, setContador] = useState(0);

    function numero()
    { 
        setContador(contador + 1);
    }

    return(
        <>
            {quizz.map((p) => <Pergunta key={p.topico} topico={p.topico} pergunta ={p.pergunta} resposta={p.resposta} numero={numero}/>)}
            <Resultado contador={contador}/>
        </>
    )
}

