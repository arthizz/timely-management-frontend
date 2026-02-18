"use client";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";
import { useTimer } from "@/hooks/timerHooks";

export default function Dashboard(){

    const {totalTime, isTimeIn, startTimer, formatTime, stopTimer} = useTimer();

    return(

        <div className="bg-gradient-to-r from-blue-500 via-blue-800 via-blue-900 to-blue-950 w-full px-16 py-16">
            <div className="timer-container">
                <div className="flex items-center justify-center mb-5">
                    <h1 className="text-4xl font-bold text-gray-200">Working Time Today</h1>
                </div>
                <div className="flex items-center justify-center text-3xl font-bold text-white gap-4">
                    <div>
                        {!isTimeIn && (
                        <button onClick={startTimer} type="button" className="bg-pink-400 cursor-pointer px-3 py-3 rounded-3xl text-white font-bold">
                            <PlayIcon className="h-6 w-auto"/>
                        </button>
                        )}
                        {isTimeIn && (
                        <button onClick={stopTimer} type="button" className="bg-pink-400 cursor-pointer px-3 py-3 rounded-3xl text-white font-bold">
                            <PauseIcon className="h-6 w-auto"/>
                        </button>
                        )}
                    </div>
                    <div>
                        <p>
                            {formatTime(totalTime)}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );

}