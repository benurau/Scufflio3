import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";

function Homepage({ socket }) {
    const [username, setusername] = useState("");
    
    

    const sendData = () => {
        if (username !== "" ) {
          socket.emit("joinLobby", { username });
        } else {
          alert("username are must !");
          window.location.reload();
        }
    };



    return (
        <div className="homepage">
          <h1>Welcome to Scufflio</h1>
          <input
            placeholder="Input your user name"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          ></input>
          <Link to={`/canvas/${username}`}>
            <button onClick={sendData}>Join</button>
          </Link>
        </div>
      );
    }
    export default Homepage;
   