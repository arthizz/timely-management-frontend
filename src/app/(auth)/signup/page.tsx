"use client";
import React, { useState } from "react";
import Link from "next/link";
import RegisterStepOne from "@/components/auth/signup/step1";
import RegisterStepTwo from "@/components/auth/signup/step2";
import { BriefcaseIcon, UserIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function SignUp(){

    const [currentStep, setCurrentStep] = useState<number>(1);

    const nextStep = () => {

        setCurrentStep(prev => prev + 1);

    }

    const backStep = () => {

        setCurrentStep(prev => prev > 1 ? prev - 1 : prev);

    }

    return(

        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="bg-gradient-to-r from-blue-500 via-blue-800 via-blue-900 to-blue-950 w-full px-16 pt-32 h-auto min-h-screen">
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
                        <hr className={`border-2 ${currentStep === 2 ? 'border-pink-400' : 'border-gray-400'} w-full`}/>
                    </div>
                    <div className="login-form-body">
                        <form>
                            {currentStep === 1 && (<RegisterStepOne />)}
                            {currentStep === 2 && (<RegisterStepTwo />)}
                            <div className="flex justify-center gap-4">
                                {currentStep > 1 && (<button onClick={backStep} type="button" className="bg-gray-400 font-bold text-white cursor-pointer hover:bg-gray-300 w-full py-2 rounded-xl my-3">Back</button>)}
                                {currentStep !== 2 && (<button onClick={nextStep} type="button" className="bg-pink-400 font-bold text-white cursor-pointer hover:bg-pink-300 w-full py-2 rounded-xl my-3">Next</button>)}
                                {currentStep === 2 && (<button type="submit" className="bg-pink-400 font-bold text-white cursor-pointer hover:bg-pink-300 w-full py-2 rounded-xl my-3">Submit</button>)}
                                
                            </div>
                        </form>
                        <p className="text-gray-400 text-sm font-bold mt-5 text-center">Already Have an Account? <Link href="/login" className="text-blue-500 text-sm font-bold">Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );

}