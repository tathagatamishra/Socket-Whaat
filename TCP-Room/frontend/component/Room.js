"use client";
import React from "react";
import { useState, useEffect } from "react";
import "../app/globals.css";

export default function Room() {

const [message, setMessage] = useState("");

useEffect(() => {
    

        
}, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start border p-2 sm:p-8">
        <h1 className="text-4xl sm:text-6xl font-bold">Room</h1>

        <input
          type="text"
          placeholder="Enter text here"
          className="text-2xl sm:text-3xl"
        />
        <button className="text-2xl sm:text-3xl border p-2 sm:p-4 rounded-md bg-slate-900 active:bg-slate-800 active:scale-95">
          Send
        </button>
      </main>
    </div>
  );
}
