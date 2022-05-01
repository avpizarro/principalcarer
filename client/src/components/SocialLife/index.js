import React, { useState } from 'react';
import Social from "../../images/social.png";
import ExpandButton from "../ExpandButton";
import Chat from "../Chat";
import io from 'socket.io-client';

import "./style.css";

const socket = io.connect("http://localhost:3000");

function SocialLife({ showMessage, ExpandComponent, CloseComponent })
{
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () =>
  {
    if (userName !== "" && room !== "")
    {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }

  if (!showMessage)
  {
    return (
      <div className="message-title" id="message">
        <div
          className=" is-container is-centered is-mobile is-multiline"
          style={{ marginTop: "3px" }}
        >
          <img
            className="ml-3"
            src={Social}
            alt="Social"
            style={{
              height: "80px",
              borderRadius: "10px",
              position: "absolute",
              top: "-10px",
              left: "-5px",
              zIndex: 1000,
            }}
          />
          <div
            className="column is-6 is-centered has-text-weight-bolds"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <div>Message</div>
            </div>
          </div>
        </div>
        <ExpandButton ExpandComponent={ExpandComponent} />
      </div>
    );
  }
  return (
    <div id="message">
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline"
        style={{ marginTop: "3px" }}
      >
        <img
          className="ml-3"
          src={Social}
          alt="Social"
          style={{
            height: "80px",
            borderRadius: "10px",
            position: "absolute",
            top: "-10px",
            left: "-5px",
            zIndex: 1000,
          }}
        />
        <div
          className="column is-6 is-centered has-text-weight-bolds"
          style={{ color: "black", textAlign: "center" }}
        >
          <div className='message-title-open'>Message</div>
        </div>
        <div className="column is-12" style={{ display: "flex", justifyContent: "center" }}>
          {!showChat ? (
            <div className="joinChatContainer">
              <h3> Start Chat</h3>
              <div>
                <div
                  className="field has-addons"
                  style={{
                    borderBottomColor: "black",
                    borderBottom: "2px",
                    borderBottomStyle: "solid",
                  }}>
                  <input
                    className="input mb-0 pb-0"
                    type="text"
                    placeholder="Name..."
                    style={{
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                      borderStyle: "none"
                    }}
                    onChange={(e) => { setUserName(e.target.value) }}
                    onKeyPress={(e) => { e.key === "Enter" && userName && room && joinRoom() }}

                  />
                </div>
                <div
                  className="field has-addons"
                  style={{
                    borderBottomColor: "black",
                    borderBottom: "2px",
                    borderBottomStyle: "solid",
                  }}>
                <input
                  className="input mb-0 pb-0"
                  type="text"
                  placeholder="Room Id..."
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    borderStyle: "none"
                  }}
                  onChange={(e) => { setRoom(e.target.value) }}
                  onKeyPress={(e) => { e.key === "Enter" && userName && room && joinRoom() }}
                />
                </div>
                <button className="join-chat-button" onClick={joinRoom}>Join a room</button>
              </div>
            </div>
          )
            :
            (
              <Chat socket={socket} username={userName} room={room} />
            )}
        </div>
      </div>
      <ExpandButton CloseComponent={CloseComponent} Expand={showMessage} />
    </div>
  );
}

export default SocialLife;
