import React, { useContext } from "react";
import UserContext from "./UserContext";

const HomeScreen = () => {
  const {user} = useContext(UserContext);
  console.log(user)
  return (
    <div>
      <h3>HomeScreen</h3>
      <hr />
      <pre>
        {JSON.stringify(user,null,4)}
      </pre>
    </div>
  );
};

export default HomeScreen;
