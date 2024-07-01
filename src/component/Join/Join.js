import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";

let user;
const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

const Join = () => {
  const [name, setName] = useState("")
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="Logo" />
        <h1>HELLO CHAT</h1>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name" id="joinInput" />
        <Link to={'/chat'}
        onClick={(event)=> !name?event.preventDefault():null}
        >
          <button onClick={sendUser} className="joinbtn">Log IN</button>
        </Link>
      </div>
    </div>
  );
};

export {user}
export default Join;
