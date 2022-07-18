import { useState, useEffect, createContext } from 'react';
import socketIOClient from "socket.io-client";

const SocketContext = createContext();

function SocketProvider({ children }) {
    const [socket, setSocket] = useState(null);
    const socketInitializer = async () => {
        await fetch('/api/socket');
        setSocket(socketIOClient());
    }
    useEffect(() => {
        socketInitializer();
    }, []);
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}
export { SocketContext, SocketProvider };
