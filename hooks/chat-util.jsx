import { SocketContext } from "../context/socket-context";
import { useState, useEffect, useContext } from "react";

const useChat = () => {
    const socket = useContext(SocketContext);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.open();
        socket.on('msg', (message) => {
            const incomingMessage = {
                ...message,
                isOwner: message.senderId === socket.id,
            };
            setMessages((messages) => [...messages, incomingMessage]);
        });
        return () => {
            socket.close();
            console.log("socket closed");
        }
    }, [socket]);

    const sendMessage = (messageBody) => {
        socket.emit('msg', {
            body: messageBody,
            senderId: socket.id,
        });
    };

    return { messages, sendMessage };
};

export default useChat;
