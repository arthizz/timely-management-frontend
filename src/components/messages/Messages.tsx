'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PaperAirplaneIcon } from '@heroicons/react/16/solid';

// Our helper from before
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Messages() {

  const [activeDropdown, setActiveDropdown] = useState<null | number>(null);
  const [myUserId, setMyUserId] = useState(2);
  const [messageOption, setMessageOption] = useState({
    index: 0,
    dropDownOpen: true,
  });
  const [privateMessage, setPrivateMessage] = useState([
    {   
        user_id: 1,
        message: "That's awesome. I think our users will really appreciate the improvements."
    },
    {
        user_id: 1,
        message: "Test generated message",
    },
    {
        user_id: 2,
        message: "Test generated message from id 2",
    },
    {
        user_id: 1,
        message: "Test generated message from id 2",
    }
  ]);



  return (
    <div className="flex flex-col h-screen relative">
        <div className="flex-1 overflow-y-auto p-4 pb-24">
            {privateMessage.map((message, index, allMessage) => {
                let previousIndex = index - 1 >= 0 ? index - 1 : 0;

                let previousMessage = allMessage[previousIndex];
                return (
                    <div className={`flex items-start gap-2.5 mt-3 ${message.user_id == myUserId ? "flex-row-reverse mt-3" : ""} `} key={index}>
                        <div className="relative w-8 h-8">
                            <Image
                            className={`rounded-full ${message.user_id == previousMessage.user_id && index > 0 ? "hidden" : ""}`}
                            src="/images/john-doe.jpg"
                            sizes='auto'
                            alt="Jese image"
                            fill
                            />
                        </div>
                        <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 rounded-e-base rounded-es-base ${message.user_id == 2 ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-gray-100"}`}>
                            <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-heading">Bonnie Green</span>
                                <span className="text-sm text-body">11:46</span>
                            </div>
                            <p className="text-sm py-2.5 text-body">
                                That's awesome. I think our users will really appreciate the improvements.
                            </p>
                            <span className="text-sm text-body">Delivered</span>
                        </div>

                        <div className="relative self-center">
                            <button
                                // onClick={() => setIsDropdownOpen(prev => !prev)}
                                onClick={() => setActiveDropdown(prev => prev == index ? null : index)}
                                className="inline-flex items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary rounded-base p-1.5 cursor-pointer"
                                type="button"
                            >
                                <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                                    <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                    d="M12 6h.01M12 12h.01M12 18h.01"
                                    />
                                </svg>
                            </button>

                            <div
                            className={cn(
                                "absolute z-10 top-full mt-2 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40",
                                activeDropdown != index && "hidden"
                            )}
                            >
                                <ul className="p-2 text-sm text-body font-medium bg-gray-800 text-gray-100">
                                    {['Reply', 'Forward', 'Copy', 'Report', 'Delete'].map((action) => (
                                    <li key={action}>
                                        <a
                                            href="#"
                                            className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
                                            >
                                            {action}
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        
        <div id="chat-input-container" className="border-t-gray-200 bg-gray-50 p-4">
            <div className="flex items-center gap-4 max-w-4xl mx-auto">
                <input type="text" className="w-full px-3 py-2 text-gray-600 rounded-xl border-1 border-gray-300 focus:outline-none" placeholder="Send a message ... " />
                <button type='button' className='rounded-full bg-gray-800 hover:bg-gray-900 p-2 text-gray-100 cursor-pointer'><PaperAirplaneIcon aria-hidden="true" className="size-6" /></button>
            </div>
        </div>
    </div>
  );
}