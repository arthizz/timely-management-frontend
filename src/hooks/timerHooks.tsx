"use client";

import { useState, useEffect } from "react";
import { fetchTime, setUserTimeIn, updateUserTimer } from "@/lib/timer";

export function useTimer(){

    type TimeData = {

        user_id: number;
        totalTime: number;
        reason: string;

    }

    const [totalTime, setTotalTime] = useState<number>(0);
    const [isTimeIn, setIsTimeIn] = useState<boolean>(false);

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

    return { totalTime, isTimeIn, startTimer, stopTimer, formatTime }

}