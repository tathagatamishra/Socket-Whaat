"use client";
import React, { useState, useEffect } from "react";
import "../app/globals.css";

export default function Room() {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const preChat = [
    "If you already have your Socket Name & Password, then just use that",
    "Or if you want to create a new one",
    "Doesn't matter, just type your Socket Name",
    "And Password",
  ];

  useEffect(() => {
    setMessages([preChat[0]]);
  }, []);

  useEffect(() => {
    if (currentIndex < preChat.length - 1) {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => {
          // Only add the next message if it's not already in the messages
          if (!prevMessages.includes(preChat[currentIndex + 1])) {
            return [...prevMessages, preChat[currentIndex + 1]];
          }
          return prevMessages;
        });
        setCurrentIndex((prev) => prev + 1);
      }, 5000);

      // Clean up the timer to prevent memory leaks
      return () => clearTimeout(timer);
    }
  }, [messages, currentIndex]);

  return (
    <div className="flex flex-col justify-between gap-[40px] items-center min-h-screen p-[40px]">
      <h1
        className="text-center text-[50px] font-[600] text-[#ffffff] font-[family-name:var(--font-Sawer)]"
        style={{ textShadow: "2px 2px 0px red" }}
      >
        TCP ROOM
      </h1>

      <div className="flex flex-col gap-[20px] w-full h-full max-w-[600px] p-[20px]">
        {messages.map((message, index) => (
          <div
            key={index}
            className="message relative block w-fit max-w-[80%] py-[14px] px-[20px] rounded-[20px] bg-[black] border-t-[1px] border-l-[1px] border-[#242424]"
          >
            <p>{message}</p>

            <div className="absolute block w-[20px] h-[20px] bg-[black] rounded-br-[4px] rotate-[45deg] left-[24px] bottom-[-9px]"></div>
          </div>
        ))}
      </div>

      <div className="w-full text-center text-white">
        <a
          href="https://github.com/your-username/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
