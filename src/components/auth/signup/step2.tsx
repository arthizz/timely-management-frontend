export default function RegisterStepTwo(){

    return(
        <>
            <div className="mb-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="companyphone" className="text-blue-900 text-sm">Company Phone number</label>
                    <div>
                        <input 
                            type="text" 
                            name="companyphone"
                            placeholder="Company Phone number"
                            className="bg-gray-200 w-full rounded-md px-2 py-1 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="businesstype" className="text-blue-900 text-sm">Business Type</label>
                    <div>
                        <input 
                            type="text" 
                            name="businesstype"
                            placeholder="Business Type"
                            className="bg-gray-200 w-full rounded-md px-2 py-1 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                        />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="companyaddress" className="text-blue-900 text-sm">Company Address</label>
                <div>
                    <input 
                        type="text" 
                        name="companyaddress"
                        placeholder="Company Address"
                        className="bg-gray-200 w-full rounded-md px-2 py-1 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                    />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="companylogo" className="text-blue-900 text-sm">Company Logo</label>
                <div>
                    <input 
                        type="file" 
                        name="companylogo"
                        placeholder="Company Logo"
                        className="bg-gray-200 w-full rounded-md px-2 py-1 outline-blue-300 border-2 border-blue-300 focus:outline-2" 
                    />
                </div>
            </div>
        </>
    );

}