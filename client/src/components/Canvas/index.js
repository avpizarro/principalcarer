import Sketch from "react-p5";
import socketIOClient from "socket.io-client";
import Sun from "../../images/26.png";

const socket = socketIOClient();

function Canvas() {
  socket.on("message", (message) => console.log(message));
  socket.emit("clientMessage", "I am here");

  const setup = (p5) => {
    if (document.getElementById("parent")) {
      const canvasOuter = document.getElementById("parent");
      console.log(canvasOuter.clientWidth, canvasOuter.clientHeight);
      const renderer = p5.createCanvas(
        canvasOuter.clientWidth,
        canvasOuter.clientHeight
      );
      renderer.parent(canvasOuter);
    }
  };

  const draw = (p5) => {
    // p5.loadImage(Sun, (img) => {
    //   p5.image(img, 0, 0, 50, 50);
    // });
    // p5.noStroke();
    // p5.fill(255, 215, 0);
    // p5.circle(0, 0, 100);
    p5.noStroke();
    p5.fill(255, 165, 0);
    p5.ellipse(mouseCoordinates.x, mouseCoordinates.y, 20, 20);
    p5.stroke("#000");
    p5.noFill();
    p5.square(squareLocation.x, squareLocation.y, 50, 4);
  };

  const windowResized = (p5) => {
    const canvasOuter = document.getElementById("parent");
    p5.resizeCanvas(canvasOuter.clientWidth, canvasOuter.clientHeight, true);
  };

  const resizeCanvas = (p5) => {
    const canvasOuter = document.getElementById("parent");
    p5.resizeCanvas(canvasOuter.clientWidth, canvasOuter.clientHeight, true);
  };

  const mouseDragged = (p5) => {
    p5.noStroke();
    p5.fill(255, 69, 0);
    p5.ellipse(p5.mouseX, p5.mouseY, 20, 20);
    console.log(p5.mouseX, p5.mouseY);
    const data = {
      x: p5.mouseX,
      y: p5.mouseY,
    };
    socket.emit("mouse", data);
  };

  const mouseClicked = (p5) => {
    p5.loadImage(Sun, (img) => {
      p5.image(img, 5, 5, 50, 50);
    });
    p5.square(p5.mouseX, p5.mouseY, 50, 4);
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

  return (
    <Sketch
      setup={setup}
      mouseDragged={mouseDragged}
      windowResized={windowResized}
      draw={draw}
      resizeCanvas={resizeCanvas}
      mousePressed={mouseClicked}
    />
  );
}

export default Canvas;
