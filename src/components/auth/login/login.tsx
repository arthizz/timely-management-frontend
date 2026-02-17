
import Link from "next/link";

export default function LoginForm(username: string, password: string){

    return(

        <form>
            <div className="mb-3">
                <label htmlFor="username" className="text-blue-900">Username</label>
                <div>
                    <input 
                        type="text" 
                        name="username"
                        placeholder="Username"
                        className="bg-gray-200 w-full rounded-md px-2 py-2 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                    />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="text-blue-900">Password</label>
                <div>
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Password"
                        className="bg-gray-200 w-full rounded-md px-2 py-2 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                    />
                </div>
            </div>
            <Link href="#" className="text-blue-500 text-sm">forgot password?</Link>
            <button className="bg-pink-400 font-bold text-white cursor-pointer hover:bg-pink-300 w-full py-2 rounded-xl my-3">LOGIN</button>
            <p className="text-gray-400 text-sm font-bold mt-5 text-center">Don't have an account? <Link href="/signup" className="text-blue-500 text-sm font-bold">Sign up</Link></p>
        </form>
    );

}