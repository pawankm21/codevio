import Image from "next/image";
import Card from "../components/card";
import PrimaryButton from "../components/primary-button";
import {  useRef, useContext } from "react";
import { SocketContext } from "../context/socket-context";
import { useRouter } from 'next/router';
import toast, { Toaster } from "react-hot-toast";
const notify = (message) => {
  return toast(message);
}
export default function Home() {
  const socket = useContext(SocketContext);
  const roomRef = useRef();
  const router=useRouter();
  // useEffect(() => {
  //   socketInitializer();
  // }, []);

  // const socketInitializer = async () => {
  //   await fetch('/api/socket');
  //   socket = socketIOClient();

  //   socket.on("connect", () => {
  //     console.log("connected");
  //   });
  //   socket.on("disconnect", () => {
  //     console.log("disconnected");
  //   });
  // }

  const handleCreate = () => {
    const newRoomId = socket.id;
    socket.emit("roomAllot", newRoomId);
    console.log("Your room id:", newRoomId);
    navigator.clipboard.writeText(newRoomId);
    notify("Your room id has been copied to clipboard");
  };
  const handleJoin = (roomRef) => {
    const roomId = roomRef.current.value;
    socket.emit("roomAllot", roomId);
    router.push(`/rooms/${roomId}`)
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
    <div className="w-full min-h-[100vh] dark:bg-neutral-900 overflow-y-auto">
      <Image
        src="/background.png"
        width={1980}
        height={1080}
        alt="Photo by  Augustyns"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{
          zIndex: 2,
          opacity: "30%",
        }}
      />
      <Toaster/>
      <div className="w-full p-4 text-center mx-auto relative z-10">
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
        className="mt-16 px-12 grid grid-cols-2 gap-8 md:grid-cols-4 pb-10 relative z-10"
      >
        {CARDS.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
}
