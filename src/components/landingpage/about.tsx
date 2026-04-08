"use client";
import { useRef } from "react";
import { useElementVisible } from "@/hooks/useIntersection";

export default function About(){
    const elementRef = useRef<HTMLDivElement>(null);
    const isVisible = useElementVisible(elementRef);

    return (

        <div className="bg-white w-full px-16 p-16">
            <div ref={elementRef} className={`text-center ${isVisible ? "animate-fade-in-bottom" : ''}`}>
                <h2 className="text-blue-950 text-5xl font-bold">Don't Let Your Business Get Left Behind</h2>
                <p className="text-blue-950 font-bold mt-10">The world is changing fast. Can your current marketing plan keep up?</p>
            </div>
            <div ref={elementRef} className={`text-center mt-5 ${isVisible ? "animate-fade-in-bottom" : ""}`}>
                <p className="text-gray-500">
                    It seems like every month managing and scaling your social media campaigns on 
                    Facebook, Instagram, Youtube, Google, Snapchat, Tiktok and all the <br/>others gets harder.
                    New privacy regulations threaten existing campaigns, new competition drives up costs, and new policies, restrict
                    what <br/> you can, & can't do.
                </p>
                <p className="text-gray-500 mt-5">
                    We believe business leaders should be freed to lead their business, and not spend <br/>
                    their time wasting away in the media buying jungle.
                </p>
            </div>
            <div ref={elementRef} className={`flex justify-center mt-10 ${isVisible ? "animate-fade-in-bottom" : ""}`}>
                <button type="button" className="px-10 py-3 rounded-3xl bg-pink-400 text-white font-bold cursor-pointer hover:bg-pink-300 hover:outline-2">WORK WITH US</button>
            </div>
        </div>

    );

}