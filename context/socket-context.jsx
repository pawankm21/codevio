import { useState, useEffect, createContext } from 'react';
import socketIOClient from "socket.io-client";

const SocketContext = createContext();

function SocketProvider({ children }) {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socketInitializer = async () => {
            await fetch('/api/socket');
            setSocket(socketIOClient());
        }
        socketInitializer();
    }, []);
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}
export { SocketContext, SocketProvider };
