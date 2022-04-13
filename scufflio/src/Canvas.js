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
    clearCanvas,
    throttle
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
    socket.on('turn', data => {
      clearCanvas()
    })
    socket.on('sendcoords', data => {
      draw()
    })
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={throttle(draw, 10)}
      ref={canvasRef}
    />
  );
}