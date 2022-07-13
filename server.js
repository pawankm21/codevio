const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = socketIO(server, {
    cors: true,
    origins:["localhost:3000"]
});

app.use(cors());

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

server.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
