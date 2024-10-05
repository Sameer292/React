import React from "react";
import { useState, useContext } from "react";
import userContext from "../context/UserContext";
function Login() {
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
const {setUser} = useContext(userContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username, Password });
  };

  return (
    <div className="text-center">
      <h2>Login</h2>
      <input
        type="text"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
