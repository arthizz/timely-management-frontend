

export default function UserProfile(){

    return (

        <div className="bg-gradient-to-r from-blue-500 via-blue-800 via-blue-900 to-blue-950 min-h-screen px-10 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div id="user-details" className="shadow-xl/20 px-5 py-10 rounded-xl bg-white mx-auto col-span-1">
                    <img src="/images/john-doe.jpg" alt="" className="h-auto w-auto rounded-xl"/>
                    <h1 className="text-3xl font-bold text-blue-900 my-3">My Profile</h1>
                    <div className="grid grid-cols-3 mb-3">
                        <div>
                            <p className="text-gray-400">Name: </p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-gray-400">John Doe</p>
                        </div>
                    </div>
                    <hr className="border-1 border-gray-300 mb-3"/>
                    <div className="grid grid-cols-3 mb-3">
                        <div>
                            <p className="text-gray-400">Email: </p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-gray-400">johndoe@gmail.com</p>
                        </div>
                    </div>
                    <hr className="border-1 border-gray-300 mb-3"/>
                    <div className="grid grid-cols-3 mb-3">
                        <div>
                            <p className="text-gray-400">Address: </p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-gray-400 w-50">Rose Street Purok 5 New Cabalan Olongapo City</p>
                        </div>
                    </div>
                    <hr className="border-1 border-gray-300 mb-3"/>
                </div>
            </div>

        </div>

    );

}