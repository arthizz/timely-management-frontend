
import LeavePurpose from "@/components/leaveform/leavePurpose";

export default function LeaveRequest(){

    return (

        <div className="w-full p-16">
            <h1 className="text-blue-900 text-3xl font-bold text-center mb-10">Leave Form Request</h1>
            <div id="leave-form" className="flex justify-center items-center">
                <div className="w-auto shadow-lg p-5 rounded-xl">
                    <div className="text-gray-500 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-3">
                            <label htmlFor="from-date" className="">From: </label>
                            <input type="date" name="from-date" className="w-full rounded-xl py-2 px-5 border-2 border-gray-500" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="from-date" className="">to: </label>
                            <input type="date" name="from-date" className="w-full rounded-xl py-2 px-5 border-2 border-gray-500" />
                        </div>
                    </div>
                    <h2 className="text-blue-900 text-center text-lg my-3 font">Leave Purpose</h2>
                    <LeavePurpose />
                </div>
            </div>
        </div>

    );

}