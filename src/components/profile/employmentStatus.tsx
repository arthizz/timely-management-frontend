import Link from "next/link";

export default function EmploymentStatus(){

    return (

        <div className="shadow-lg px-5 py-10 rounded-xl bg-white mb-10">
            <div className="flex justify-between mb-3">
                <div>
                    <h2 className="text-blue-900 font-semibold text-lg">Employment Details: </h2>
                </div>
            </div>
            <hr className="mb-3 border-1 border-gray-200"/>
            <div className="flex justify-between mb-3">
                <div>
                    <h2 className="text-gray-400 text-sm">Employment Details: </h2>
                </div>
                <div className="px-3 py-1 text-gray-400 rounded-3xl text-sm">
                    <p>Employed</p>
                </div>
            </div>
            <div className="flex justify-between mb-3">
                <div>
                    <h2 className="text-gray-400 text-sm">Company: </h2>
                </div>
                <div className="px-3 py-1 text-gray-400 rounded-3xl text-sm">
                    <p>iFormatLogic</p>
                </div>
            </div>
            <div className="flex justify-between mb-3">
                <div>
                    <h2 className="text-gray-400 text-sm">Company Website: </h2>
                </div>
                <div className="px-3 py-1 text-gray-400 rounded-3xl text-sm">
                    <Link href="https://iformatlogic.com/" target="__blank" className="text-cyan-500">https://iformatlogic.com/</Link>
                </div>
            </div>
            <div className="flex justify-between mb-3">
                <div>
                    <h2 className="text-gray-400 text-sm">Company Address: </h2>
                </div>
                <div className="px-3 py-1 text-gray-400 rounded-3xl text-sm">
                    <p>Rose Street Purok 5 New Cabalan Olongapo City</p>
                </div>
            </div>
            <div className="flex justify-between mb-3">
                <div>
                    <h2 className="text-gray-400 text-sm">Employee Rate / Day: </h2>
                </div>
                <div className="px-3 py-1 text-gray-400 rounded-3xl text-sm">
                    <p>₱120.00 / Day</p>
                </div>
            </div>
        </div>

    );

}