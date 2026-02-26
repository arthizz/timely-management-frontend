"use client";
import UserChart from "./userChart";

export default function TotalEarned(){

    return(

        <div className="shadow-lg px-5 py-10 rounded-xl bg-white">
            <div className="flex justify-between mb-3">
                <div>
                    <h2 className="text-blue-900 font-semibold text-lg mb-3">Total Earned and Work Hours: </h2>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">₱120.00</p>
                </div>
            </div>
            <hr className="border-1 border-gray-200 mb-3"/>
            <UserChart />
        </div>

    );

}