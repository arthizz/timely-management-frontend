"use client"
import { useState } from "react"
import OurTeamCards from "@/components/teams/ourTeamCards"

export default function OurTeam(){

    const [members, setMembers] = useState([
        {
            employeeName: "John Doe",
            jobTitle: "Project Manager",
            jobDescription: `Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s.`,
            profilePhoto: "./images/john-doe.jpg",
        },
        {
            employeeName: "Jane Doe",
            jobTitle: "CEO",
            jobDescription: `Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s.`,
            profilePhoto: "./images/jane-doe.jpg",
        },
        {
            employeeName: "Juan Doe",
            jobTitle: "Marketing",
            jobDescription: `Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s.`,
            profilePhoto: "./images/john-doe-1.jpg",
        },
    ])

    return (
        <div className="bg-gradient-to-r from-blue-500 via-blue-800 via-blue-900 to-blue-950 w-full px-16 py-16">
            <h1 className="text-gray-100 text-3xl font-bold text-center mt-3"> Meet Our Team </h1>
            <div className="w-[75%] mx-auto mt-5">
                <div className="grid grid-cols-3 gap-4">
                    {members.map((item, index) => (
                        <OurTeamCards key={index} employeeName={item.employeeName} jobTitle={item.jobTitle} jobDescription={item.jobDescription} profilePhoto={item.profilePhoto}/>
                    ))}
                </div>
            </div>
        </div>
    )

}