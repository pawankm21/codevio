import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { useEffect, useState, useCallback } from 'react';
import socketIOClient from "socket.io-client";
export default function Home() {
  const onChange = useCallback((value, changeValue) => {
    console.log(value);
    console.log(changeValue);
  },[]);
const SOCKET_SERVER_URL = "http://localhost:4000";
const [socket, setSocket] = useState(null);

useEffect(() => {
  setSocket(socketIOClient(SOCKET_SERVER_URL));
}, []);

useEffect(() => {
  if (!socket) return;

  socket.on("connect", () => {
    console.log("connected");
  });
  socket.on('disconnect', () => {
    console.log("disconnected");
  });
}, [socket]);

const handleCreate = () => {
  const newRoomId = socket.id;
  socket.emit("roomAllot", newRoomId);
  console.log("Your room id:", newRoomId);
  navigator.clipboard.writeText(newRoomId);
}
const handleJoin = (e) => {
  e.preventDefault();
  const roomId = e.target.roomid.value;
  socket.emit("roomAllot", roomId);
  roomId = "";
}
  return (
    <div>
      <Head>
        <title>Codevio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main">
        <div className="button-row">
          <input type="button" value="Create Room" onClick={handleCreate} />
          <form onSubmit={handleJoin}>
            <input id="roomid" type="text" placeholder="Enter RoomId" />
            <button>Join Room </button>
          </form>
        </div>
        <CodeMirror
          value="console.log('hello world!');"
          height="100vh"
          width="100vw"
          theme={sublime}
          extensions={[java(), cpp(), python()]}
          onChange={onChange}
        />
      </main>

      <footer></footer>
    </div>
  );
}
