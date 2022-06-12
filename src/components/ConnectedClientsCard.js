import React, { useState, useEffect } from "react";
import { socket } from "../service/socket";
const ConnectedClientsCard = () => {
  const [numUsers, setNumUsers] = useState(0);

  useEffect(() => {
    socket.on("message", (message) => {
      setNumUsers(message.text);
    });
    socket.emit("connected", "world");
    return () => {
      socket.emit("disconnected", "world");
    };
  }, [numUsers, setNumUsers]);

  return (
    <div className="connected-clients-card">

        {numUsers === 1 ? (
          <p><span className="num-users">{numUsers}</span> visitor is watching the button.</p>
        ) : (
          <p><span className="num-users">{numUsers}</span> visitors are watching the button.</p>
        )}
    </div>
  );
};
export default ConnectedClientsCard;
