import axios from "axios";
import { useEffect, useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/chat");
    setChat(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chat.map((item: any) => {
        return (
          <div>
            <div>{item.chatName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Chat;
