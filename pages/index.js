
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

import Card from "../components/card";
import PrimaryButton from "../components/primary-button";
import Search from "../components/search";

export default function Home() {
  const CARDS = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 2,
      name: "Jane Doe",
      username: "janedoe",
      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 3,
      name: "John Doe",
      username: "johndoe",
      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    },
  ];

  return (
    <div className="w-full h-full dark:bg-neutral-900">
      <div className="w-full p-4 text-center mx-auto">
        <h1 className="text-5xl font-bold dark:text-white mt-20 font-mono">
          Prepare for Interviews with Your Friends.
        </h1>
        <div className="md:flex gap-8 w-1/2 mx-auto m-10  place-items-center justify-around text-neutral-100">
          <Search />
          <div className="md:m-0 m-5">Or</div>
          <PrimaryButton title="Create Room" />
        </div>
      </div>
      <section
        id="cards"
        className="mt-16 px-12 grid grid-cols-2 gap-8 md:grid-cols-4 pb-10"
      >
        {CARDS.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
}
