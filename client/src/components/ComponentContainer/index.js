import "./style.css";
import { v4 as uuidv4 } from 'uuid';

function ComponentContainer({ children }) {
  return (
    <div className="column componentContainer" id={uuidv4()} >
      {children}
    </div>
  );
}

export default ComponentContainer;
