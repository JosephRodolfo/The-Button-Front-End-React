import React, { useState, useContext, useCallback, useEffect } from "react";
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

  return <div>{numUsers}</div>;
};
export default ConnectedClientsCard;
