import { createContext } from "react";

const ExpandButtonContext = createContext({
  ExpandComponent: () => {},
  CloseComponent: () => {},
});

export default ExpandButtonContext;