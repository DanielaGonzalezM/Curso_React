import React, { useContext } from "react";
import UserContext from "./UserContext";

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const handleClick=()=>{
    setUser({});
  }
  return (
    <div>
      <h3>AboutScreen</h3>
      <hr />
      <pre>{JSON.stringify(user, null, 4)}</pre>
      <button  className="btn btn-primary"
        onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default AboutScreen;
