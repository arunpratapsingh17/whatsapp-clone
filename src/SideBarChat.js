import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
import db from "./Firebase";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const SideBarChat = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const createChat = () => {
    const roomName = prompt("Enter name for new chat");
    if (roomName) {
      console.log("New chat part working");
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  React.useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return !addNewChat ? (
    <Link to={`/rooms/${id}`} className="link">
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
};

export default SideBarChat;
