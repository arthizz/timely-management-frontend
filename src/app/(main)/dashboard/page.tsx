"use client";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";
import { useTimer } from "@/hooks/timerHooks";
import EmployeeCalendar from "@/components/dashboard/fullcalendar";

export default function Dashboard(){

    const {totalTime, isTimeIn, startTimer, formatTime, stopTimer} = useTimer();

    return(

        <>
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
        
        {/* Full Calendar */}
        <div className="mx-auto px-32 py-16">
            <h2 className="text-blue-900 text-3xl font-bold text-center mb-10">Employee Calendar & Records</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="px-16 py-10 bg-pink-800/40 text-white rounded-xl">
                    <h3 className="text-white text-2xl font-bold">Daily Record</h3>
                    <h3 className="text-blue-900 text-xl font-bold">7hrs</h3>
                </div>
                <div className="px-16 py-10 bg-gray-900/40 text-white rounded-xl">
                    <h3 className="text-white text-2xl font-bold">Weekly Record</h3>
                    <h3 className="text-blue-900 text-xl font-bold">7hrs</h3>
                </div>
                <div className="px-16 py-10 bg-blue-900/40 text-white rounded-xl">
                    <h3 className="text-white text-2xl font-bold">Monthly Record</h3>
                    <h3 className="text-blue-900 text-xl font-bold">7hrs</h3>
                </div>
            </div>
            <EmployeeCalendar status={true} timeIn={new Date()} timeOut={new Date()}/>
        </div>

        </>
    );

}