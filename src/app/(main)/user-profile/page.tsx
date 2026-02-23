import UserDetails from "@/components/profile/userDetails";
import TotalEarned from "@/components/profile/totalEarned";
import EmploymentStatus from "@/components/profile/employmentStatus";
export default function UserProfile(){

    return (

        <div className="bg-gradient-to-r from-blue-500 via-blue-800 via-blue-900 to-blue-950 min-h-screen px-10 py-10 flex flex-items-center justify-center relative overflow-hidden">
            
            <div className="w-full md:w-7xl">
                <div className="relative z-10 max-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:p-16">
                    <UserDetails />
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <EmploymentStatus/>
                        <TotalEarned />
                    </div>
                </div>
            </div>

        </div>

    );

}