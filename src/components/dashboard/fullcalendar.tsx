"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interActionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

type TimeRecord = {

    status: boolean;
    timeIn: Date;
    timeOut: Date;

}

export default function EmployeeCalendar({status, timeIn, timeOut}: TimeRecord){

    const timeInData = timeIn.toLocaleDateString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });



    const renderEventComponents = (eventInfo: any) => {

        return (
            <div className="bg-blue-900 py-2 px-2 w-full rounded-xl">
                <small className="text-white font-bold">{eventInfo.event.title}</small><br/>
                <small className="text-pink-400 font-bold">Status: {status ? "In" : "Out"}</small>
            </div>
        );

    }

    const dateClickInterAction = (args: any) => {

        console.log(args);

    }

    return (

        <FullCalendar
            plugins={[dayGridPlugin, interActionPlugin]}
            dateClick={dateClickInterAction}
            initialView="dayGridMonth"
            eventContent={renderEventComponents}
            events={[{
                title: `${timeInData}`,
                date: timeIn
            }]}
        />

    )

}