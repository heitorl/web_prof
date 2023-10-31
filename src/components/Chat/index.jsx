import { useState, useEffect } from "react";
import io from "socket.io-client";
import { ChatModal } from "./style";
import { useContext } from "react";
import { TeacherContext } from "../../providers/TeacherContext";

export const Chat = ({ onClose, avatarUrl, valueFind }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const { teacher } = useContext(TeacherContext)

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    newSocket.on("connect", () => {
      console.log(newSocket);
      setSocket(newSocket);
    });
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("receive-message", handleReceiveMessage);

    return () => {
      socket.off("receive-message", handleReceiveMessage);
    };
  }, [socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!socket) return;
    const newMessage = { author: teacher.name, text: message };
    socket.emit("send-message", newMessage);
    setMessage("");
  };

  const handleReceiveMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <ChatModal>
      <div className="chat-header">
        <img src={avatarUrl} alt="avatar" />
        <h2>Chat</h2>
        <button onClick={onClose}>Fechar</button>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div className={`ctn-description ${message.author === valueFind.selectedObject?.name ? "owner" : ""}`} key={index}>
            <img src={avatarUrl} alt="avatar" />
            <span>{message.author}: </span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem aqui"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </ChatModal>
  );
};
