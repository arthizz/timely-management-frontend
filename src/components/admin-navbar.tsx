"use strict";

import Link from "next/link";

export default function AdminNavBar(){

    return(

        <>
            <div className="bg-blue-900 min-h-screen fixed">
                <div className="logo-container">
                    <div className="w-70 flex shrink-0 items-center cursor-pointer justify-center my-5 gap-4">
                        <Link href="/admin">
                                <img
                                alt="Your Company"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=fuchsia&shade=300"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <h1 className="font-bold text-lg text-gray-200">Thymely</h1>
                    </div>
                    <hr className="border-gray-200"/>
                </div>
            </div>
        </>

    );

}