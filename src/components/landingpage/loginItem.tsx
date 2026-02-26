import Link from "next/link";
export default function LoginItem(){

    return (

        <>
            <Link href={"/login"}>
                <button className="px-4 py-2 bg-pink-400 hover:bg-pink-300 text-white rounded-3xl text-sm font-bold cursor-pointer">Get Started</button>
            </Link>
        </>

    );

}