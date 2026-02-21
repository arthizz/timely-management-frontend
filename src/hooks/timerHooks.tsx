"use client";

import { useState, useEffect } from "react";
import { fetchTime, setUserTimeIn, updateUserTimer } from "@/lib/timer";

export function useTimer(){

    type RecordData = {
    
        title: string;
        start: string | null; 
    
    }

    type TimeData = {

        user_id: number;
        totalTime: number;
        reason: string;

    }

    const [totalTime, setTotalTime] = useState<number>(0);
    const [isTimeIn, setIsTimeIn] = useState<boolean>(false);
    const [userRecordData, setUserRecordData] = useState<RecordData[]>(
        Array.from({length: 4 }, (_, index) => {
            const date = new Date();
            date.setDate(date.getDate() + index);
            
            const options: Intl.DateTimeFormatOptions = {
                weekday: 'short',
                year: 'numeric',      // 2026
                month: 'short',       // Feb
                day: 'numeric',       // 21
                hour: 'numeric',      // 11
                minute: '2-digit',    // 30
                hour12: true          // am/pm
            };
    
            return{
                title: date.toLocaleDateString('en-US', options),
                start: date.toISOString(),
            };
        })
    )

    useEffect(() => {

        let intervalId: NodeJS.Timeout | undefined;

        if(isTimeIn){

            intervalId = setInterval(() => {

                setTotalTime(prev => prev + 1);

            }, 1000);

        }

        return () => {

            if(intervalId){

                clearInterval(intervalId);

            }

        }

    }, [isTimeIn]);

    const startTimer = async () => {

        // const previousTime: Promise<TimeData> = fetchTime(1);
        // setTotalTime(1);

        setTotalTime(prev => prev == 0 ? 0 : prev);
        setIsTimeIn(true);

    }

    const stopTimer = () => {

        setIsTimeIn(false);

    }

    const formatTime = (totalSeconds: number): string => {

        const ho = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');

        const min = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');

        const sec = Math.floor(totalSeconds % 60).toString().padStart(2, '0');

        return `${ho}:${min}:${sec}`;

    }

    return { totalTime, isTimeIn, startTimer, stopTimer, formatTime, userRecordData }

}