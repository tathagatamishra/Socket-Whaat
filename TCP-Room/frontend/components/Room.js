"use client";
import React, { useState, useEffect, useRef } from "react";
import "../app/globals.css";
import axios from "axios";

export default function Room() {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [IdInput, setIdInput] = useState(true);
  const [PassInput, setPassInput] = useState(false);
  const [socketId, setSocketId] = useState("");
  const [socketPass, setSocketPass] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const preChat = [
    "If u already hav ur Socket Name & Password, then just use that",
    "Or if u want to create a new one",
    "Doesnt matter, just type ur Socket Name",
    "And Password",
  ];

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setMessages([preChat[0]]);
  }, []);

  useEffect(() => {
    if (currentIndex >= preChat.length - 1) return;
    if (currentIndex == 2 && socketId == "") return;

    const timer = setTimeout(() => {
      setMessages([...messages, preChat[currentIndex + 1]]);
      setCurrentIndex((prev) => prev + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [messages, preChat, socketId]);

  const handleSubmit = () => {
    if (userMessage !== "") {
      if (IdInput) {
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setSocketId(userMessage);
        setIdInput(false);
        setPassInput(true);
        setUserMessage("");
      } else if (PassInput) {
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setSocketPass(userMessage);
        // setIdInput(false);
        setPassInput(false);
        setUserMessage("");
      }
    }
  };

  const signUp = async () => {
    try {
      await axios.post("http://localhost:4000/signup", {
        username: socketId,
        password: socketPass,
      });
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, "Welcome to TCP Room"]);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (socketId !== "" && socketPass !== "") {
      signUp();
    }
  }, [socketPass]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className="flex flex-col justify-between items-center p-[40px] w-full h-screen"
      // style={{ boxShadow: "0px 80px 60px -50px red inset" }}
    >
      <h1
        className="text-center text-[50px] font-[600] text-[#ffffff] font-[family-name:var(--font-Sawer)]"
        style={{ textShadow: "2px 2px 0px red" }}
      >
        TCP ROOM
      </h1>

      <div className="w-full max-w-[600px] h-full mt-[50px] p-[20px] py-[80px] overflow-y-scroll">
        {messages.map((message, index) => (
          <div className="w-full" key={index}>
            {message === socketId || message === socketPass ? (
              <div className="w-full flex flex-col items-end">
                <div className="my-message relative block w-fit max-w-[80%] py-[14px] px-[20px] rounded-[20px] bg-[#2b2b2b] border-t-[1px] border-r-[1px] border-[#3b3b3b] z-[9]">
                  <p>{message}</p>

                  <div className="absolute block w-[20px] h-[20px] bg-[#2b2b2b] rounded-br-[4px] rotate-[45deg] right-[24px] bottom-[-9px]"></div>
                </div>
              </div>
            ) : (
              <div className="message relative block w-fit max-w-[80%] py-[14px] px-[20px] rounded-[20px] bg-[black] border-t-[1px] border-l-[1px] border-[#242424] z-[9]">
                <p>{message}</p>

                <div className="absolute block w-[20px] h-[20px] bg-[black] rounded-br-[4px] rotate-[45deg] left-[24px] bottom-[-9px]"></div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div
        className="w-full max-w-[600px] flex flex-row gap-[10px] p-[20px] pt-[0px] z-[10]"
        style={{
          boxShadow: "0px -40px 50px 20px #171717",
          background: "#171717",
        }}
      >
        <input
          className="w-full min-h-[40px] bg-[black] text-[white] rounded-[15px] px-[12px] py-[8px]"
          type="text"
          placeholder={IdInput ? "Socket Name" : PassInput ? "Password" : ""}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button
          className="min-w-[40px] min-h-[40px] rounded-l-[25px] rounded-r-[50px] p-[0px] flex flex-col items-center justify-center text-center text-[black] bg-[#fff] active:scale-[90%]"
          onClick={handleSubmit}
        >
          &#11166;
        </button>
      </div>

      <div className="w-full mt-[40px]">
        <a
          target="_blank"
          className="text-[white]"
          href="https://github.com/tathagatamishra/Socket-Whaat"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
