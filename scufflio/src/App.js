import React from 'react'
import Chatbox from './chatBoxAll/chatbox'
import Choices from './choices';
import Board from './canvas2';




function App({}) {
  
  
  return (
    <>
      <Choices/>
      <Board />
      <Chatbox/>
    </>
  );
}

export default App;