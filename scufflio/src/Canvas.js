import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";
import socket from "./socket";


export function Canvas({}) {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    clearCanvas
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
    socket.on('turn', data => {
      clearCanvas()
    })
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}