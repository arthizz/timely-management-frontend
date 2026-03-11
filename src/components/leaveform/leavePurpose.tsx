"use client";

import SickLeaveSvg from "../svgIcons/sickLeaveSvg";
import BereavementSvg from "../svgIcons/bereavementSvg";
import MaternitySvg from "../svgIcons/maternitySvg";
import PersonalLeaveSvg from "../svgIcons/peronalLeaveSvg";
import PaternitySvg from "../svgIcons/paternitySvg";
import { ChangeEvent, useState } from "react";
export default function LeavePurpose(){

    const [togglePersonal, setTogglePersonal] = useState<boolean>(true);
    const [selectedLeave, setSelectedLeave] = useState<string>("personal");
    let personalLeaveClasses = togglePersonal ? "w-full mb-3 text-gray-500" : "hidden";

    const togglePersonalLeave = (event: ChangeEvent<HTMLInputElement>) => {

        setSelectedLeave(event.target.value);

        if(event.target.value == "personal"){

            setTogglePersonal(true);

        }else{

            setTogglePersonal(false);

        }

        personalLeaveClasses = togglePersonal ? "w-full mb-3 text-gray-500" : "hidden"

    }

    return (

        <>
            <div className="text-gray-500 grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                <div className="radio">
                    <input type="radio" id="sick-leave" name="leave-purpose" value="sick-leave" onChange={togglePersonalLeave} checked={selectedLeave == "sick-leave"}/>
                    <label htmlFor="sick-leave" className="border-solid border-2 border-grey bg-white block shadow-md rounded-lg text-sm">
                        <div className="flex justify-between items-center px-4 py-2">
                            <div className="uppercase tracking-wide"><strong>Sick Leave</strong></div>
                            <SickLeaveSvg />
                        </div>
                    </label>
                </div>
                <div className="radio">
                    <input type="radio" id="bereavement" name="leave-purpose" value="bereavement" onChange={togglePersonalLeave} checked={selectedLeave == "bereavement"}/>
                    <label htmlFor="bereavement" className="border-solid border-2 border-grey bg-white block shadow-md rounded-lg">
                        <div className="flex justify-between items-center px-4 py-2 text-sm">
                            <div className="uppercase tracking-wide"><strong>Bereavement</strong></div>
                            <BereavementSvg/>
                        </div>
                    </label>
                </div>
                <div className="radio">
                    <input type="radio" id="maternity" name="leave-purpose" value="maternity" onChange={togglePersonalLeave} checked={selectedLeave == "maternity"}/>
                    <label htmlFor="maternity" className="border-solid border-2 border-grey bg-white block shadow-md rounded-lg">
                        <div className="flex justify-between items-center px-4 py-2 text-sm">
                            <div className="uppercase tracking-wide"><strong>Maternity</strong></div>
                            <MaternitySvg/>
                        </div>
                    </label>
                </div>
                <div className="radio">
                    <input type="radio" id="paternity" name="leave-purpose" value="paternity" onChange={togglePersonalLeave} checked={selectedLeave == "paternity"}/>
                    <label htmlFor="paternity" className="border-solid border-2 border-grey bg-white block shadow-md rounded-lg text-sm">
                        <div className="flex justify-between items-center px-4 py-2">
                            <div className="uppercase tracking-wide"><strong>Paternity</strong></div>
                            <PaternitySvg/>
                        </div>
                    </label>
                </div>
                <div className="radio">
                    <input type="radio" id="personal" name="leave-purpose" value="personal" onChange={togglePersonalLeave} checked={selectedLeave == "personal"}/>
                    <label htmlFor="personal" className="border-solid border-2 border-grey bg-white block shadow-md rounded-lg text-sm">
                        <div className="flex justify-between items-center px-4 py-2">
                            <div className="uppercase tracking-wide"><strong>Personal</strong></div>
                            <PersonalLeaveSvg/>
                        </div>
                    </label>
                </div>
            </div>
            <div className={personalLeaveClasses}>
                <label htmlFor="peronal-reason">Personal Reason: </label>
                <input type="text" className="w-full border-2 border-gray-500 rounded-xl px-2 py-2" placeholder="Personal Reason" />
            </div>
        </>
        

    );

}