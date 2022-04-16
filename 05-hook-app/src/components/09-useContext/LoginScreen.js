import React, { useContext } from "react";
import UserContext from "./UserContext";

const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h3>LoginScreen</h3>
      <hr />
      
      <button
        className="btn btn-primary"
        onClick={() => setUser({ ...user, id: 123, name: "Daniela" })}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
