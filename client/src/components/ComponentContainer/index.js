import uuid from 'react-uuid';
import "./style.css";

function ComponentContainer({ children }) {

  return (
    <div className="column componentContainer" id={uuid} >
      {children}
    </div>
  );
}

export default ComponentContainer;
