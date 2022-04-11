import React, { useState, useEffect } from "react";
import socket from "./socket";

function Choices(){
    const [chosen,setChosen] = useState("")
    const [allWords, setAllWords] = useState([])
    const [show, setShow] = useState(true)
    const [turn, setTurn] = useState(false)


    useEffect(() => { 
        socket.on('words', data =>{          
          setTurn(data.turn)  
          setAllWords(data.words)
          setChosen("")
          socket.off('words', data)
          setShow(true)
        })
    })

    

    const SubmitChosen = (word) => {
        setChosen(word.word)
        socket.emit('gus', word.word)
        setShow(false)
    }

    

    return (
        <div>
            {turn && <div>
            {show && <div>
            {allWords.map((word,i) => 
                <button key={i} onClick={ () => SubmitChosen({word})}>{word}</button> 
            )}
            </div>}
            <p>{chosen}</p>
            </div>}
        </div>
    )
}
export default Choices