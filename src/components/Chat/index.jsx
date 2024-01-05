import { useState, useEffect } from "react";
import io from "socket.io-client";
import { ChatContent, ChatModal } from "./style";
import { useContext } from "react";
import { TeacherContext } from "../../providers/TeacherContext";

export const Chat = ({ onClose, avatarUrl, teacher }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [users, setUsers] = useState([]);
  const { user, setNotification, notification, retrieveMessages } =
    useContext(TeacherContext);

  useEffect(() => {
    const newSocket = io("http://localhost:3000", {
      autoConnect: false,
    });

    const authenticateUser = () => {
      const userId = user.id;
      newSocket.auth = { userId };
      newSocket.connect();
    };

    authenticateUser();

    newSocket.on("connect", () => {
      console.log("Conectado ao servidor WebSocket");
    });

    newSocket.on("disconnect", () => {
      console.log("Desconectado do servidor WebSocket");
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user.id]);

  useEffect(() => {
    if (!socket) return;

    socket.on("private-message", handleReceiveMessage);
    socket.on("user connected", handleUserConnected);
    socket.on("user disconnected", handleUserDisconnected);
    socket.on("new-message", () => {
      // Exibir notificação
      setNotification(notification + 1);
    });
    // socket.on("users", handleUsersList);

    return () => {
      socket.off("private-message", handleReceiveMessage);
      socket.off("user connected", handleUserConnected);
      socket.off("user disconnected", handleUserDisconnected);
      // socket.off("users", handleUsersList);
    };
  }, [socket, teacher]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!socket || !teacher.id) return;

    const newPrivateMessage = {
      content: message,
      to: teacher.id,
      from: user.id,
      author: user.name,
      fromSelf: true,
    };

    socket.emit("private-message", newPrivateMessage);

    setMessages((prevMessages) => [...prevMessages, newPrivateMessage]);

    setMessage("");
  };

  const handleReceiveMessage = (message) => {
    console.log("Received message on the client:", message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleUserConnected = (user) => {
    console.log("User connected:", user);
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleUserDisconnected = (userId) => {
    console.log("User disconnected:", userId);
    setUsers((prevUsers) => prevUsers.filter((user) => user.userID !== userId));
  };

  useEffect(() => {
    const fetchAllMessages = async () => {
      try {
        const { data } = await retrieveMessages(teacher);
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchAllMessages();
  }, [retrieveMessages, setMessages]);

  return (
    <ChatModal>
      <div className="chat-header">
        <div>
          <img src={avatarUrl} alt="avatar" />
          <h2>{teacher.name}</h2>
        </div>

        <span onClick={onClose}>X</span>
      </div>
      <ChatContent>
        {messages.map((message, index) => (
          <div
            className={`ctn-description ${
              message.sender?.id === user.id ? "owner" : ""
            }`}
            key={index}
          >
            <span className="msg">{message.content}</span>
            <span className="name">{message.sender?.name}</span>
          </div>
        ))}
      </ChatContent>
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
