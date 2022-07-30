import { useState, useEffect, useRef } from "react";
import useChat from "../../../hooks/chat-util";
export default function Chat() {
    const { messages, sendMessage } = useChat();
    const [newMessage, setNewMessage] = useState("");
    const messageRef = useRef();
    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage !== "") {
            sendMessage(newMessage);
            setNewMessage("");
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    useEffect(() => messageRef.current.scrollIntoView({
        behaviour: "smooth",
        block: "nearest",
    }))
    return (
        <>
            <div className="overflow-y-auto scrollbar-hide">
                <ol className="">
                    {messages.map((message, index) => (
                        <li
                            key={index}
                            className={`${message.isOwner ? "bg-[#0091EA] mr-auto" : "bg-[#648e35] ml-auto"} m-[1em] py-[0.5em] px-[1.5em] rounded-[20px] text-white break-words max-w-[65%] w-fit`}
                        >
                            <span>{message.body}</span>
                            <p className="text-xs text-blue-900">{message.timeStamp}</p>
                        </li>
                    ))}
                </ol>
                <div ref={messageRef}></div>
            </div>
            <div className="mx-2">
                <input className="w-full p-3
                focus:ring ring-blue-900 text-neutral-300 outline-none bg-neutral-700 rounded my-2" type="text" placeholder="Just chat..." id="message" value={newMessage} onChange={handleNewMessageChange} onKeyUp={handleKeyUp} />
                <input disabled={!newMessage} type="button" value="Send" onClick={handleSendMessage} className="cursor-pointer dark:bg-blue-900 bg-blue-400 p-2 rounded active:shadow-none shadow-blue-200 shadow-sm dark:text-white m-2" />
            </div>
        </>
    )
}
