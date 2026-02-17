export default function RegisterStepOne(){

    return(
        <>
            <div className="mb-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="companyname" className="text-blue-900 text-sm">Company Name</label>
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
                    <label htmlFor="companyurl" className="text-blue-900 text-sm">Company Url</label>
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
                <label htmlFor="companyemail" className="text-blue-900 text-sm">Company Email</label>
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
                <label htmlFor="companyusername" className="text-blue-900 text-sm">Username</label>
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
                        <label htmlFor="password" className="text-blue-900 text-sm">Password</label>
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
                        <label htmlFor="confirmPassword" className="text-blue-900 text-sm">Confirm Password</label>
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
        </>
    );

}