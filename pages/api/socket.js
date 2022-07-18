import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
    if(res.socket.server.io) {
        console.log('Socket is already running');
    } else {
        console.log('Socket is initializing');
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on("connection", (socket) => {
            let currRoomId;
            console.log("New client connected", socket.id);

            socket.on("roomAllot", (roomId) => {
                console.log("roomAllot", roomId);
                socket.join(roomId);
                currRoomId = roomId;
            });

            socket.on("msg", (msg) => {
                io.in(currRoomId).emit("msg", msg);
            });

            socket.on("disconnect", () => {
                console.log("Client disconnected");
            });
        });
    }

    res.end();
}

export default SocketHandler;
