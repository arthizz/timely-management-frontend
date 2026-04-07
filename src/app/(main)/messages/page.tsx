"use client";
import { useState } from "react";
import Image from "next/image";
import MessageHistory from "@/components/messages/MessageHistory";
import Messages from "@/components/messages/Messages";

export default function Home() {

  const [isActive, setIsActive] = useState({
    index: 0,
    isActive: false
  });

  const [messages, setMessages] = useState([
    {   
      id: 1,
      name: "John Doe",
      image: "john-doe.jpg",
      placeholder: "This is a generated text ...",
    },
    {
      id: 2,
      name: "Juan Doe",
      image: "john-doe-1.jpg",
      placeholder: "This is a generated text ...",

    },
    {
      id: 3,
      name: "Jane Doe",
      image: "jane-doe.jpg",
      placeholder: "This is a generated text ...",

    }
  ]);

  const viewMessage = (index:number) => {

      setIsActive({index: index, isActive: true});

  }

  return (
    <>
      <div className="w-full">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 divide-solid divide-x-1 divide-gray-300 max-h-screen">
          <div className="pt-5 px-3">
            <MessageHistory viewMessage={viewMessage} messages={messages} isActive={isActive}/>
          </div>
          <div className="col-span-2">
            <div className="py-5">
              <Messages />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
