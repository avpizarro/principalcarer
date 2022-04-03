import Sketch from "react-p5";
import socketIOClient from "socket.io-client";
import Sun from "../../images/sun.png";
import Drawing from "../../images/drawing.png";
import ExpandButton from "../ExpandButton";

const socket = socketIOClient();

function Canvas({ showCanvas, ExpandComponent, CloseComponent })
{
  socket.on("message", (message) => console.log(message));
  socket.emit("clientMessage", "I am here");

  const setup = (p5) =>
  {
    if (document.getElementById("canvas"))
    {
      const canvasOuter = document.getElementById("canvas");
      const renderer = p5.createCanvas(320, 500);
      renderer.parent(canvasOuter);
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
    }
  };

  const windowResized = (p5) =>
  {
    const canvasOuter = document.getElementById("canvas");
    p5.resizeCanvas(
      canvasOuter.clientWidth,
      canvasOuter.clientHeight - 80,
      true
    );
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
      <div id="canvas">
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
    <div id="canvas">
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
