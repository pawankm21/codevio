import { useState, useEffect, useRef } from "react";
import chatUtil from "./chatUtil";
export default function Chat() {
    const { messages, sendMessage } = chatUtil();
    const [newMessage, setNewMessage] = useState("");
    const messageRef = useRef();

    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if(newMessage !== "") {
            sendMessage(newMessage);
            setNewMessage("");
        }
    };

    const handleKeyUp = (e) => {
        if(e.key === "Enter") {
            handleSendMessage();
        }
    };

    useEffect(() => messageRef.current.scrollIntoView({behaviour: "smooth"}))
    return (
        <>
        <div className="overflow-y-auto">
            <ol className="[padding-inline-end: 40px]">
                {messages.map((message, index) => (
                    <li
                        key={index}
                        className={`${message.isOwner ? "bg-[#0091EA] mr-auto" : "bg-[#8BC34A] ml-auto"} m-[1em] py-[0.5em] px-[1.5em] rounded-[20px] text-white break-words max-w-[65%] w-fit`}
                    >
                        <span>{message.body}</span>
                    </li>
                ))}
            </ol>
            <div ref={messageRef}></div>
        </div>
        <div className="mx-2">
            <input className="w-96 h-12 rounded-md px-2" type="text" placeholder="Just chat..." id="message" value={newMessage} onChange={handleNewMessageChange} onKeyUp={handleKeyUp} />
            <input disabled={!newMessage} type="button" value="Send" onClick={handleSendMessage} className="cursor-pointer dark:bg-blue-900 bg-blue-400 p-2 rounded active:shadow-none shadow-blue-200 shadow-sm dark:text-white m-2" />
        </div>
        </>
    )
}
