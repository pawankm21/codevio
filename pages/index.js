import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { useEffect, useRef, useState, useCallback } from 'react';
import socketIOClient from "socket.io-client";
export default function Home() {
  const onChange = useCallback((value, changeValue) => {
    console.log(value);
    console.log(changeValue);
  },[]);
const SOCKET_SERVER_URL = "http://localhost:4000";
const socketRef = useRef();
const handleCreate = () => {
  const newRoomId = socketRef.id;
  socketRef.current.emit("roomAllot", newRoomId);
  console.log("Your room id:", newRoomId);
  navigator.clipboard.writeText(newRoomId);
}
const handleJoin = (e) => {
  e.preventDefault();
  const roomId = e.target.roomid.value;
  socketRef.current.emit("roomAllot", roomId);
  roomId = "";
}
useEffect(() => {
  socketRef.current = socketIOClient(SOCKET_SERVER_URL);
  socketRef.current.on("connect", () => {
    console.log("Connected to server");
  });
  socketRef.current.on("disconnect", () => {
    console.log("Disconnected from server");
  });
  return () => {
    socketRef.current.disconnect();
  };
}, []);
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
