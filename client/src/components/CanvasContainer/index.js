import "./style.css";

function CanvasContainer({ children }) {
  return (
    <div className="column componentContainer" id="parent">
      {children}

    </div>
  );
}

export default CanvasContainer;
