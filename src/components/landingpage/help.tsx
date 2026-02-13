import { MegaphoneIcon, PhoneIcon, ChatBubbleBottomCenterTextIcon,
    LightBulbIcon, PuzzlePieceIcon, HandThumbUpIcon
 } from "@heroicons/react/24/outline";

export default function Help(){

    return (

        <div className="bg-gray-200 w-full py-16 px-16 mx-auto">
            <div className="text-center mb-5">
                <h2 className="text-blue-950 text-5xl font-bold">How We Help You Scale</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-16 px-16 gap-5">
                <div className="pt-5 pb-16 px-5 inset-shadow-sm shadow-lg bg-white">
                    <div className="card-icon">
                        <MegaphoneIcon className="size-10 text-green-800 mx-auto"/>
                    </div>
                    <div className="card-body mt-8">
                        <div className="card-title text-center">
                            <h5 className="text-blue-900 text-lg font-bold">Fully Managed <br/> Media Buying</h5>
                        </div>
                        <div className="card-content text-center text-gray-500 mt-8">
                            <p>Breathe easy. Our team of experienced</p>
                            <p>media buyers is looking after your</p>
                            <p>company 24/7</p>
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-16 px-5 inset-shadow-sm shadow-lg bg-white">
                    <div className="card-icon">
                        <PhoneIcon className="size-10 text-green-800 mx-auto"/>
                    </div>
                    <div className="card-body mt-8">
                        <div className="card-title text-center">
                            <h5 className="text-blue-900 text-lg font-bold">Facebook "Bat Phone" <br/> For VIP Support</h5>
                        </div>
                        <div className="card-content text-center text-gray-500 mt-8">
                            <p>Shut downs are real problem even for</p>
                            <p>Businesses doing everything right</p>
                            <p>Lucky for us, help is just a text away</p>
                            <p>with our premier level Agency Partner</p>
                            <p>access.</p>
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-16 px-5 inset-shadow-sm shadow-lg bg-white">
                    <div className="card-icon">
                        <ChatBubbleBottomCenterTextIcon className="size-10 text-green-800 mx-auto"/>
                    </div>
                    <div className="card-body mt-8">
                        <div className="card-title text-center">
                            <h5 className="text-blue-900 text-lg font-bold">Manage Creative <br/>For Ads</h5>
                        </div>
                        <div className="card-content text-center text-gray-500 mt-8">
                            <p>We know what works best for FaceBook</p>
                            <p>ads, and we'll create what we need</p>
                            <p>using your existing assets.</p>
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-16 px-5 inset-shadow-sm shadow-lg bg-white">
                    <div className="card-icon">
                        <LightBulbIcon className="size-10 text-green-800 mx-auto"/>
                    </div>
                    <div className="card-body mt-8">
                        <div className="card-title text-center">
                            <h5 className="text-blue-900 text-lg font-bold">The Agency<br/> Brain Trust</h5>
                        </div>
                        <div className="card-content text-center text-gray-500 mt-8">
                            <p>Your business will benefit from the</p>
                            <p>insights of the team managing $100m</p>
                            <p>each year on Facebook</p>
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-16 px-5 inset-shadow-sm shadow-lg bg-white">
                    <div className="card-icon">
                        <PuzzlePieceIcon className="size-10 text-green-800 mx-auto"/>
                    </div>
                    <div className="card-body mt-8">
                        <div className="card-title text-center">
                            <h5 className="text-blue-900 text-lg font-bold">Focused Strategy<br/> Sessions</h5>
                        </div>
                        <div className="card-content text-center text-gray-500 mt-8">
                            <p>We'll keep your advertising strategy</p>
                            <p>cutting edge and update it regularly to</p>
                            <p>give you the highest chance of success</p>
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-16 px-5 inset-shadow-sm shadow-lg bg-white">
                    <div className="card-icon">
                        <HandThumbUpIcon className="size-10 text-green-800 mx-auto"/>
                    </div>
                    <div className="card-body mt-8">
                        <div className="card-title text-center">
                            <h5 className="text-blue-900 text-lg font-bold">Customer <br/>Success Team</h5>
                        </div>
                        <div className="card-content text-center text-gray-500 mt-8">
                            <p>Your personal advocate to ensure your</p>
                            <p>business gets the best service possible</p>
                            <p>to help you reach your goals.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <button className="py-5 px-10 bg-pink-400 text-white font-bold text-lg rounded-4xl cursor-pointer hover:bg-pink-300 hover:outline-2">WORK WITH US</button>
            </div>
        </div>

    );

}