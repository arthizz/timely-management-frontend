

export default function UserDetails(){

    return(

        <div id="user-details" className="bg-white rounded-3xl shadow-lg p-6 md:col-span-1 max-h-fit">
            <div className="flex flex-col items-center text-center">
                <img src="/images/john-doe.jpg" alt="" className="w-75 h-75 rounded-2xl object-cover mb-4"/>
                <h2 className="text-lg font-semibold text-blue-900 my-3">My Profile</h2>
                <p className="text-sm text-gray-500 mb-4"> Last login 27 Aug 2021 14:54 </p>
            </div>
            <hr className="border-1 border-gray-300 mb-3"/>
            <div className="space-y-10 text-sm">
                <div className="grid grid-cols-3 mb-3">
                    <div>
                        <p className="text-gray-500">Name: </p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-gray-500">John Doe</p>
                    </div>
                </div>
                <hr className="border-1 border-gray-300 mb-3"/>
                <div className="grid grid-cols-3 mb-3">
                    <div>
                        <p className="text-gray-500">Email: </p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-gray-500">johndoe@gmail.com</p>
                    </div>
                </div>
                <hr className="border-1 border-gray-300 mb-3"/>
                <div className="grid grid-cols-3 mb-3">
                    <div>
                        <p className="text-gray-500">Contact #: </p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-gray-500">+63907 - 051 - 1004</p>
                    </div>
                </div>
                <hr className="border-1 border-gray-300 mb-3"/>
                <div className="grid grid-cols-3 mb-3">
                    <div>
                        <p className="text-gray-500">Address: </p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-gray-500 w-50">Rose Street Purok 5 New Cabalan Olongapo City</p>
                    </div>
                </div>
                <hr className="border-1 border-gray-300 mb-3"/>
            </div>
        </div>

    );

}