"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interActionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

type TimeRecord = {

    user_id: number;
    time_in: string;
    time_out: string | null;

}

type RecordData = {

    user_id: number;
    title: string;
    start: string;

}



export default function EmployeeCalendar({user_record}: any){

    console.log(user_record)

    const renderEventComponents = (eventInfo: any) => {

        return (
            <div className="bg-blue-900 py-2 px-2 w-full rounded-xl">
                <small className="text-white font-bold">{eventInfo.event.title}</small><br/>
                {/* <small className="text-pink-400 font-bold">Status: {status ? "In" : "Out"}</small> */}
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
            events={user_record}
        />

    )

}