"use client"

interface ourTeamTypes {

    employeeName: string;
    jobTitle: string;
    jobDescription: string;
    profilePhoto: string;

}

export default function OurTeamCards({employeeName, jobTitle, jobDescription, profilePhoto}: ourTeamTypes){

    return (

        <div className="cards">
            <div className="card-top relative bg-gradient-to-r from-blue-500 via-blue-800 via-blue-900 to-blue-950 rounded-t-lg p-5 min-h-20">
                <img src={profilePhoto} alt="teammate" className="h-20 w-20 absolute top-9 left-33 rounded-full z-10 border-3 border-gray-100" />
            </div>
            <div className="card-body relative bg-blue-600 rounded-b-lg p-10 text-center">
                <h2 className="text-center text-gray-100 font-semibold text-2xl">{employeeName}</h2>
                <small className="text-gray-300 w-full">{jobTitle}</small>
                <p className="text-gray-300 text-xs mt-3">{jobDescription}</p>
            </div>
        </div>

    )

}