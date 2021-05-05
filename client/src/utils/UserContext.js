import { createContext } from "react";

const UserContext = createContext({
  fullName: "",
  relatioship: "",
  username: "",
  password: "",
  user: {
    fullName: "",
    relatioship: "",
    username: "",
    password: "",
  },
  setFullName: () => {},
  setRelationship: () => {},
  setUsername: () => {},
  setPassword: () => {},
  SignUpSubmit: () => {},
});

export default UserContext;
