import React, { useRef,useEffect,useState, useContext} from "react";
import socket from "../socket";
import useSound from 'use-sound';
import hitmarker from "../music/hitmarker_2.mp3"


function ChatWindow(){
  const [messages, setMessages] = useState([]);
  const divRef = useRef(null)



  useEffect(() => { 
    socket.on('toGuess', data =>{
      setMessages(prevMessages => [...prevMessages, data]);
      socket.off('toGuess', data)
    })
    
    
  }, [])

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const [marker] = useSound(hitmarker)

  useEffect(() => {
    socket.on('answer', data => {
      if (data === true){
        marker()
        console.log(data)
      }
    })
  });

 
  
    
  
 
    

    return (
      
        <div className="box">
          {messages.map((msg, i) => <p key={i}>{msg.usn}: {msg.msg}</p>)}
          <div ref={divRef} />
        </div>
      
    )
  
}
export default ChatWindow
