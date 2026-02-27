
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
                    <div className="text-gray-500 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="radio">
                            <input type="radio" id="sick-leave" name="leave-purpose" value="sick-leave" />
                            <label htmlFor="sick-leave" className="border-solid border-2 border-grey bg-white block shadow-md rounded-lg">
                                <div className="flex justify-between items-center px-4 py-2">
                                    <div className="uppercase tracking-wide"><strong>Sick Leave</strong></div>
                                    <svg className="w-8 h-8 flex-no-shrink bg-green-lighter rounded-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">

                                        <circle cx="32" cy="32" r="28" fill="#FCD34D" stroke="#111827" stroke-width="2"/>
                                        
                                        <line x1="20" y1="26" x2="26" y2="30" stroke="#111827" stroke-width="3" stroke-linecap="round"/>
                                        <line x1="26" y1="26" x2="20" y2="30" stroke="#111827" stroke-width="3" stroke-linecap="round"/>
                                        
                                        <line x1="38" y1="26" x2="44" y2="30" stroke="#111827" stroke-width="3" stroke-linecap="round"/>
                                        <line x1="44" y1="26" x2="38" y2="30" stroke="#111827" stroke-width="3" stroke-linecap="round"/>

                                        <path d="M24 44 Q32 38 40 44" fill="none" stroke="#111827" stroke-width="3" stroke-linecap="round"/>

                                        <rect x="46" y="18" width="4" height="18" rx="2" fill="#E5E7EB" stroke="#111827" stroke-width="1"/>
                                        <circle cx="48" cy="40" r="6" fill="#EF4444" stroke="#111827" stroke-width="1"/>
                                        <rect x="47" y="24" width="2" height="12" fill="#EF4444"/>
                                    </svg>
                                </div>
                            </label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="bereavement" name="leave-purpose" value="bereavement" />
                            <label htmlFor="bereavement" className="border-solid border-2 border-grey bg-white block shadow-md rounded-lg">
                                <div className="flex justify-between items-center px-4 py-2">
                                    <div className="uppercase tracking-wide"><strong>Bereavement</strong></div>
                                    <svg className="w-8 h-8 flex-no-shrink bg-green-lighter rounded-full" fill="#4caf50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                </div>
                            </label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="maternity" name="leave-purpose" value="maternity" />
                            <label htmlFor="maternity" className="border-solid border-2 border-grey bg-white block shadow-md rounded-lg">
                                <div className="flex justify-between items-center px-4 py-2">
                                    <div className="uppercase tracking-wide"><strong>Maternity</strong></div>
                                    <svg className="w-8 h-8 flex-no-shrink bg-green-lighter rounded-full" fill="#4caf50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                </div>
                            </label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="paternity" name="leave-purpose" value="paternity" />
                            <label htmlFor="paternity" className="border-solid border-2 border-grey bg-white block shadow-md rounded-lg">
                                <div className="flex justify-between items-center px-4 py-2">
                                    <div className="uppercase tracking-wide"><strong>Paternity</strong></div>
                                    <svg className="w-8 h-8 flex-no-shrink bg-green-lighter rounded-full" fill="#4caf50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                </div>
                            </label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="personal" name="leave-purpose" value="personal" />
                            <label htmlFor="personal" className="border-solid border-2 border-grey bg-white block shadow-md rounded-lg">
                                <div className="flex justify-between items-center px-4 py-2">
                                    <div className="uppercase tracking-wide"><strong>Personal</strong></div>
                                    <svg className="w-8 h-8 flex-no-shrink bg-green-lighter rounded-full" fill="#4caf50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}