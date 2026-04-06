"use client";

import { useState } from "react";

interface MessageHistoryType {

    isActive: {index: number; isActive: boolean};
    messages: {id: number; name: string; image: string; placeholder: string}[];
    viewMessage: (index: number) => void;

}

export default function MessageHistory({isActive, messages, viewMessage}: MessageHistoryType){

    return (
        <>
            <h2 className="font-semibold text-gray-800 text-xl text-center">Messages</h2>
            <div id="search-input" className="mt-3">
                <input type="text" placeholder="Search message" id="search"
                className="w-full border-1 border-gray-300 px-3 rounded-xl py-2" />
            </div>
            <div id="history-list" className="w-full border-1 border-gray-300 rounded-md mt-3">
                {messages.map((message, index) => {
                    return (
                    <div className="w-full" key={message.id} onClick={() => viewMessage(index)}>
                        <div className={`flex items-center gap-4 px-3 py-3 hover:bg-gray-800 hover:text-gray-100 hover:cursor-pointer ${index == isActive.index ? "bg-gray-800 text-gray-100" : ""}`}>
                            <div className="image-container">
                                <img src={"./images/" + message.image} alt="john doe"  className="h-15 w-auto rounded-4xl"/>
                            </div>
                            <div className="message-container">
                                <h3 className="font-medium text-lg">{message.name}</h3>
                                <p className="text-gray-300 text-md">{message.placeholder}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
    );

}