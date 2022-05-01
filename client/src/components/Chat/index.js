import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function Chat({ socket, username, room })
{
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () =>
    {
        if (currentMessage !== "")
        {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };
            await socket.emit("send_message", messageData);
            setMessageList(oldMessages => [...oldMessages, messageData]);
            setCurrentMessage("");
        }
    }

    useEffect(() =>
    {
        const messageHandler = (item) =>
        {
            setMessageList(oldMessages => [...oldMessages, item]);
        };
        socket.on("receive_message", messageHandler);
        return () => socket.off("receive_message", messageHandler);
    }, [socket]);

    return (
        <div className="chat-window colum m-6">
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body">
                <ScrollToBottom className="message-container">
                    {messageList.map((messageContent) =>
                    {
                        return <div key={Math.random()} className="message" id={username === messageContent.author ? "you" : "other"}>
                            <div>
                                <div className="message-content">
                                    <p>{messageContent.message}</p>
                                </div>
                                <div className="message-meta">
                                    <p id="time">{messageContent.time}</p>
                                    <p id="author">{messageContent.author}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </ScrollToBottom>
            </div>

            <div className="chat-footer">
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="Type message..."
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                < button
                    onClick={sendMessage}
                >
                    <FontAwesomeIcon icon="paper-plane" size="1x" />
                </button>
            </div>
        </div>
    );
}


export default Chat;