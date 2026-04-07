"use client";
import { ClockIcon, RocketLaunchIcon, CurrencyDollarIcon, GiftIcon, WrenchIcon, WifiIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection(){

    const [avatars, setAvatars] = useState([
        "https://i.pravatar.cc/100?u=1",
        "https://i.pravatar.cc/100?u=2",
        "https://i.pravatar.cc/100?u=3",
        "https://i.pravatar.cc/100?u=4",
    ])

    return (
        <div className="bg-gradient-to-r from-blue-500 via-blue-800 via-blue-900 to-blue-950 w-full px-16 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="mx-auto col-span-2 py-12">
                    <div className="flex items-center">
                        <h1 className="text-gray-200 text-5xl font-bold">
                            Unlock Your Business <br/>
                            Potential With Facebook & <br/> 
                            Instagram Advertising 
                        </h1>
                    </div>
                    <div className="flex items-center mt-3">
                        <small className="text-gray-200">Facebook Premier Level Partner</small>
                    </div>
                    <div className="flex items-center mt-5">
                        <Link href={"/login"}>
                            <button className="
                                px-10 
                                bg-pink-400 
                                rounded-3xl 
                                py-3 
                                text-white 
                                font-bold 
                                cursor-pointer
                                hover:bg-pink-300
                                hover:outline-2">Get Started</button>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 mt-5">
                        <div className="flex -space-x-3">
                            {avatars.map((url, index) => (
                                <img key={index} src={url} alt="user" className="h-12 w-12 rounded-full border-blue-900 border-3 object-cover" />
                            ))}
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border-3 border-blue-900 bg-blue-900 text-xs font-bold text-white">
                                +82
                            </div>
                        </div>
                        <div className="h-8 w-[1px] bg-gray-300"></div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 border border-blue-900">
                                <div className="text-orange-500 text-xl">★</div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-200 leading-tight">4.9/5 Ratings</p>
                                <p className="text-xs text-gray-200">Trust by 100+</p>
                            </div>
                        </div>
                    </div>
                    

                </div>
                <div className="">
                    <img src="/images/rocket-web-clock.png" alt="rocket" className="h-100 w-auto" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-6 mt-10 px-16">
                <div className="mx-auto text-gray-200 text-center">
                    <ClockIcon className="size-10 text-gray-200 mx-auto"></ClockIcon>
                    <p className="mt-5">Clock-In/Out</p>
                </div>
                <div className="mx-auto text-gray-200 text-center">
                    <RocketLaunchIcon className="size-10 text-gray-200 mx-auto"></RocketLaunchIcon>
                    <p className="mt-5">Productivity Overview</p>
                </div>
                <div className="mx-auto text-gray-200 text-center">
                    <CurrencyDollarIcon className="size-10 text-gray-200 mx-auto"></CurrencyDollarIcon>
                    <p className="mt-5">Payroll Tracking</p>
                </div>
                <div className="mx-auto text-gray-200 text-center">
                    <GiftIcon className="size-10 text-gray-200 mx-auto"></GiftIcon>
                    <p className="mt-5">Leave & Benefits</p>
                </div>
                <div className="mx-auto text-gray-200 text-center">
                    <WrenchIcon className="size-10 text-gray-200 mx-auto"></WrenchIcon>
                    <p className="mt-5">Task Management</p>
                </div>
                <div className="mx-auto text-gray-200 text-center">
                    <WifiIcon className="size-10 text-gray-200 mx-auto"></WifiIcon>
                    <p className="mt-5">Attendance Reports</p>
                </div>
            </div>
        </div>
    );

}