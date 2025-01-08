import React, {useEffect, useRef, useState } from 'react';
import Sketch from "react-p5";
import socketIOClient from "socket.io-client";
import Sun from "../../images/sun.png";
import Drawing from "../../images/drawing.png";
import ExpandButton from "../ExpandButton";

const socket = socketIOClient();

function Canvas({ showCanvas, ExpandComponent, CloseComponent })
{
  const canvasRef = useRef(null); // Reference to the canvas container
  const [canvasSize, setCanvasSize] = useState({ width: 320, height: 500});

  socket.on("message", (message) => console.log(message));
  socket.emit("clientMessage", "I am here");

  // Add useEffect to get the new size of the canvas component
  // as the window or component are resized

  useEffect(() => {
    if (canvasRef.current) {
      // Dynamically update canvas size based on container size
      console.log('inUseEffect before:', canvasSize);
      const updateCanvasSize = () => {
        const canvasOuter = canvasRef.current;
        setCanvasSize({
          width: canvasOuter.clientWidth,
          height: canvasOuter.clientHeight, //Adjust for any extra space, e.g., header
        });
      }

      // Initial size update
      updateCanvasSize();
      console.log('inUseEffect after:', canvasSize);

      const resizeObserver = new ResizeObserver(updateCanvasSize); // Listen for size changes
      resizeObserver.observe(canvasRef.current);
      console.log('resize observer:', canvasSize);
      // Cleanup
      return () => resizeObserver.disconnect();

      // Set up event listener for window resize to update canvas size
      // window.addEventListener("resize", updateCanvasSize);

      // Cleanup listener on component unmount
      // return () => window.removeEventListener("resize", updateCanvasSize);
    }
  }, [canvasRef]);

  const setup = (p5) =>
  {
    // Old problematic solution, not using Reac hooks
    // if (document.getElementById("canvas"))
    // {
    //   const canvasOuter = document.getElementById("canvas");
    //   const renderer = p5.createCanvas(320, 500);
    //   renderer.parent(canvasOuter);
    // }

    // New solution with useRef
    if (canvasRef.current) {
      const { width, height } = canvasSize;
      const renderer = p5.createCanvas(width, height);
      p5.pixelDensity(1); // Disable high-DPI scaling
      renderer.parent(canvasRef.current)
    }
  };

  const draw = (p5) =>
  {
    p5.noStroke();
    p5.fill(253, 90, 0);
    p5.ellipse(mouseCoordinates.x, mouseCoordinates.y, 20, 20);
    p5.fill(255, 214, 2);
    p5.ellipse(squareLocation.x, squareLocation.y, 30, 30);
  };

  const keyPressed = (p5) =>
  {
    if (p5.keyCode === p5.LEFT_ARROW)
    {
      p5.loadImage(Drawing, (img) =>
      {
        p5.image(img, 20, 60);
      });
    }
    if (p5.keyCode === p5.RIGHT_ARROW)
    {
      // Add action for right arrow key
    }
  };

  const windowResized = (p5) =>
  {
    // Old solution

    // const canvasOuter = document.getElementById("canvas");
    // p5.resizeCanvas(
    //   canvasOuter.clientWidth,
    //   canvasOuter.clientHeight - 80,
    //   true
    // );

    // New solution to resize with useState
    const { width, height } = canvasSize;
    console.log('window resized', width, height)
    p5.resizeCanvas(width, height, true);

  };

  const mouseDragged = (p5) =>
  {
    p5.noStroke();
    p5.fill(255, 128, 0);
    p5.ellipse(p5.mouseX, p5.mouseY, 20, 20);
    console.log(p5.mouseX, p5.mouseY);
    const data = {
      x: p5.mouseX,
      y: p5.mouseY,
    };
    socket.emit("mouse", data);
  };

  const mouseClicked = (p5) =>
  {
    p5.noStroke();
    p5.fill(252, 188, 9);
    p5.ellipse(p5.mouseX, p5.mouseY, 30, 30);
    const data = {
      x: p5.mouseX,
      y: p5.mouseY,
    };
    socket.emit("square", data);
  };


  let mouseCoordinates = {};
  let squareLocation = {};

  socket.on("mouse", (message) => (mouseCoordinates = message));
  socket.on("square", (message) => (squareLocation = message));

  if (!showCanvas)
  {
    return (
      <div 
        id="canvas" 
        ref={canvasRef}
        >
        <div
          className="columns is-12 is-container is-centered is-mobile is-multiline"
          style={{ marginTop: "3px" }}
        >
          <img
            className="ml-3"
            src={Sun}
            alt="Sun"
            style={{
              height: "50px",
              position: "absolute",
              left: "0px",
              bottom: "2px",
              zIndex: 1000,
            }}
          />
          <div
            className="column is-6 is-centered has-text-weight-bolds"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <div>Canvas</div>
            </div>
          </div>
        </div>
        <ExpandButton ExpandComponent={ExpandComponent} />
      </div>
    );
  }
  return (
    <div id="canvas" ref={canvasRef}>
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline"
        style={{ marginTop: "3px" }}
      >
        <img
          className="ml-3"
          src={Sun}
          alt="Sun"
          style={{
            height: "50px",
            position: "absolute",
            left: "0px",
            top: "2px",
            zIndex: 1000,
          }}
        />
        <div
          className="column is-6 is-centered has-text-weight-bolds"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <div className="mb-4">Canvas</div>
          </div>
        </div>
        <Sketch
          setup={setup}
          mouseDragged={mouseDragged}
          windowResized={windowResized}
          draw={draw}
          mouseClicked={mouseClicked}
          keyPressed={keyPressed}
        />
      </div>
      <ExpandButton CloseComponent={CloseComponent} Expand={showCanvas} />
    </div>
  );
}

export default Canvas;
