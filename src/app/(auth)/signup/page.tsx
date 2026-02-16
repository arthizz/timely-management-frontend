import Link from "next/link";
import { BriefcaseIcon, UserIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function SignUp(){

    return(

        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="bg-gradient-to-r from-blue-500 via-blue-800 via-blue-900 to-blue-950 w-full px-16 pt-32 h-screen h-auto">
                <div>
                    <h1 className="text-3xl font-bold text-white">Get Started With <span className="text-pink-400">ThaymeWind</span></h1>
                    <p className="mt-5 text-gray-300">Your company’s trusted hub for employee time tracking. Manage attendance, schedules, and work hours in one place.</p>
                </div>
                <div className="mt-8">
                    <div className="flex gap-4 mb-5">
                        <div className="bg-pink-400/50 rounded-xl px-3 py-3">
                            <BriefcaseIcon className="h-6 w-auto text-white" />
                        </div>
                        <div>
                            <p className="text-gray-200 font-bold">Register Your Company</p>
                            <small className="text-gray-300">Add your company Details.</small>
                        </div>
                    </div>
                    <div className="flex gap-4 mb-5">
                        <div className="bg-pink-400/50 rounded-xl px-3 py-3">
                            <UserIcon className="h-6 w-auto text-white" />
                        </div>
                        <div>
                            <p className="text-gray-200 font-bold">Add Your Company Employee</p>
                            <small className="text-gray-300">Choosee Employee Specific Role.</small>
                        </div>
                    </div>
                    <div className="flex gap-4 mb-5">
                        <div className="bg-pink-400/50 rounded-xl px-3 py-3">
                            <ClockIcon className="h-6 w-auto text-white" />
                        </div>
                        <div>
                            <p className="text-gray-200 font-bold">Time Tracking for Employee</p>
                            <small className="text-gray-300">Employee Can Track Total Hours</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-32 py-16">
                <div className="flex items-center justify-center mb-5">
                    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=500" alt="company logo" className="h-10 w-auto" />
                </div>
                <div className="login-form-title">
                    <h5 className="text-blue-900 text-center text-3xl font-bold mb-5">Account Registration</h5>
                    <div className="flex gap-4 justify-content-center w-full mb-5">
                        <hr className="border-2 border-pink-400 w-full"/>
                        <hr className="border-2 border-gray-400 w-full"/>
                    </div>
                    <div className="login-form-body">
                        <form>
                            <div className="mb-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                               <div>
                                    <label htmlFor="companyname" className="text-blue-900">Company Name</label>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="companyname"
                                            placeholder="Company name"
                                            className="bg-gray-200 w-full rounded-md px-2 py-1 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                                        />
                                    </div>
                               </div>
                               <div>
                                    <label htmlFor="companyurl" className="text-blue-900">Company Url</label>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="companyurl"
                                            placeholder="https://url.com"
                                            className="bg-gray-200 w-full rounded-md px-2 py-1 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                                        />
                                    </div>
                               </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="companyemail" className="text-blue-900">Company Email</label>
                                <div>
                                    <input 
                                        type="email" 
                                        name="companyemail"
                                        placeholder="Company Email"
                                        className="bg-gray-200 w-full rounded-md px-2 py-1 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="companyusername" className="text-blue-900">Username</label>
                                <div>
                                    <input 
                                        type="text" 
                                        name="companyusername"
                                        placeholder="Username"
                                        className="bg-gray-200 w-full rounded-md px-2 py-1 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="password" className="text-blue-900">Password</label>
                                        <div>
                                            <input 
                                                type="password" 
                                                name="password"
                                                placeholder="Password"
                                                className="bg-gray-200 w-full rounded-md px-2 py-1 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="confirmPassword" className="text-blue-900">Confirm Password</label>
                                        <div>
                                            <input 
                                                type="password" 
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                className="bg-gray-200 w-full rounded-md px-2 py-1 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-pink-400 font-bold text-white cursor-pointer hover:bg-pink-300 w-full py-2 rounded-xl my-3">Next</button>
                            <p className="text-gray-400 text-sm font-bold mt-5 text-center">Already Have an Account? <Link href="#" className="text-blue-500 text-sm font-bold">Sign up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}