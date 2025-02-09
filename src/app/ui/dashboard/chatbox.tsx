"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_SERVER_URL = "wss://socket1.hinuiiik.win";
// const SOCKET_SERVER_URL = "ws://192.168.2.23:4423";


export default function Chatbox({ sectionId }: { sectionId: string }) {
    const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
    const [input, setInput] = useState("");
    const [socket, setSocket] = useState<Socket | null>(null);

    const username = "Guest123"; // Placeholder username

    useEffect(() => {
        const newSocket = io(SOCKET_SERVER_URL);
        setSocket(newSocket);

        newSocket.emit("joinSection", sectionId);

        newSocket.on("receiveMessage", (message: { user: string; text: string }) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [sectionId]);

    const sendMessage = () => {
        if (input.trim() && socket) {
            const message = { user: username, text: input };
            socket.emit("sendMessage", { sectionId, message });
            setInput("");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter" && !e.shiftKey) { // thought i was thinking ahead but i didn't implement newlines
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <div className="w-full h-full flex flex-col border rounded-md bg-gray-900 p-4">
            {/* Individual messages */}
            <div className="flex-1 overflow-y-auto bg-gray-800 p-2 rounded-md text-white">
                {messages.map((msg, index) => (
                    <div key={index} className="p-2 border-b border-gray-700">
                        <strong className="text-blue-400">{msg.user}: </strong>
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Input fidel castro */}
            <div className="flex mt-2">
                <input
                    className="flex-1 p-2 border rounded bg-gray-700 text-white"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type a message..."
                />
                <button className="ml-2 p-2 bg-blue-500 text-white rounded" onClick={sendMessage}>
                    Send
                </button>
            </div>
        </div>
    );
}
