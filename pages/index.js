import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import PrimaryButton from "../components/primary-button";
import { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
export default function Home() {
  const SOCKET_SERVER_URL = "http://localhost:4000";
  const [socket, setSocket] = useState(null);
  const roomRef = useRef();
  useEffect(() => {
    setSocket(socketIOClient(SOCKET_SERVER_URL));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("disconnect", () => {
      console.log("disconnected");
    });
  }, [socket]);

  const handleCreate = () => {
    const newRoomId = socket.id;
    socket.emit("roomAllot", newRoomId);
    console.log("Your room id:", newRoomId);
    navigator.clipboard.writeText(newRoomId);
  };
  const handleJoin = (roomRef) => {
    const roomId = roomRef.current.value;
    socket.emit("roomAllot", roomId);
    roomId = "";
  };

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
        <div className="md:flex gap-8 w-2/3 mx-auto m-10  place-items-center justify-around text-neutral-100">
          <PrimaryButton
            title="Create Room"
            className="w-1/2"
            onClick={handleCreate}
          />
          <div className="md:m-0 m-5">Or</div>
          <div className="w-full flex place-items-center gap-4">
            <div className="rounded-lg bg-black  shadow-blue-900">
              <input
                className="w-full outline-none rounded-lg py-4 px-8 text-lg font-mono hover:shadow-md
      transition-all duration-100 ease-in-out hover:shadow-blue-400  text-neutral-900 shadow-blue-400 shadow-lg "
                type="text"
                placeholder="Enter Room ID"
                ref={roomRef}
              />
            </div>
            <PrimaryButton
              title="Join Room"
              className="w-1/2"
              onClick={() => {
                handleJoin(roomRef);
              }}
            />
          </div>
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
