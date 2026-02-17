
import Link from "next/link";
import LoginForm from "@/components/auth/login/login";
export default function Login(){

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="bg-gradient-to-r from-blue-500 via-blue-800 via-blue-900 to-blue-950 w-full px-16 pt-32 h-screen">
                <div>
                    <h1 className="text-3xl font-bold text-white">Welcome to <span className="text-pink-400">ThaymeWind</span></h1>
                    <p className="mt-5 text-gray-300">Your company’s trusted hub for employee time tracking. Manage attendance, schedules, and work hours in one place.</p>
                </div>
            </div>
            <div className="px-32 py-16">
                <div className="flex items-center justify-center mb-5">
                    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=500" alt="company logo" className="h-10 w-auto" />
                </div>
                <div className="login-form-title">
                    <h5 className="text-blue-900 text-center text-3xl font-bold mb-5">Login To Your Account</h5>
                    <div className="login-form-body px-10">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>

    );

}