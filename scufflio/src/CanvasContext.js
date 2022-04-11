import React, { useContext, useRef, useState } from "react";
import Socket from "./socket"


const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false)
  var [turn, setTurn] = useState(0)
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  

  Socket.on('turn', host => {
    setTurn(host)
  })

  
  


  const prepareCanvas = () => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth  ;
    canvas.height = window.innerHeight ;
    canvas.style.width = `${window.innerWidth/2}px`;
    canvas.style.height = `${window.innerHeight/2}px`;

    const context = canvas.getContext("2d")
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    if (turn === 1){
      Socket.off('sendCoords')
      const { offsetX, offsetY } = nativeEvent;
      Socket.emit('data', { x: offsetX, y: offsetY })
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    } else {
      Socket.on('sendCoords', data => {
          contextRef.current.beginPath();
          contextRef.current.moveTo(data.x, data.y);
          setIsDrawing(true);
          contextRef.current.lineTo(data.x, data.y);
          contextRef.current.stroke();
      });
    } 
   
    
    
    
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);