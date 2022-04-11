import React, { useState, useEffect } from 'react'
import { Canvas } from './Canvas'
import Chatbox from './chatBoxAll/chatbox'
import Choices from './choices';




function App({}) {
  
  
  return (
    <>
      <Choices/>
      <Canvas />
      <Chatbox/>
    </>
  );
}

export default App;