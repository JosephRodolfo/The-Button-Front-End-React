import React, { useState, useContext, useCallback, useEffect } from "react";
import { socket } from "../service/socket";

const ConnectedClientsCard = () => {
  //   const handleClientJoined = useCallback(() => {
  //     socket.emit("joined", "world");
  //   }, []);

  const handleClientLeft = useCallback(() => {
    socket.emit("disconnected", "world");
  }, []);
  useEffect(() => {
    socket.on("message", (message) => {
      const html = message.text;
      setNumUsers(html);
    });
    socket.emit("connected", "world");
    return () => {
      socket.emit("disconnected", "world");
    };
  }, [socket]);

  const [numUsers, setNumUsers] = useState(0);

  return <div>{numUsers}</div>;
};
export default ConnectedClientsCard;
