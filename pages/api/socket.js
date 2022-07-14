import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
    if(res.socket.server.io) {
        console.log('Socket is already running');
    } else {
        console.log('Socket is initializing');
        const io = new Server(res.socket.server);
        res.socket.server.io = io;
        
        io.on("connection", (socket) => {
            console.log("New client connected", socket.id);
            socket.on("disconnect", () => {
                console.log("Client disconnected");
            });

            socket.on("roomAllot", (roomId) => {
                console.log("roomAllot", roomId);
                socket.join(roomId);
            });
        });
    }

    res.end();
}

export default SocketHandler;
