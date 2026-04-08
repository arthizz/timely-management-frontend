"use client"
import { useState, useEffect, useRef, RefObject } from "react";

export function useElementVisible(ref: RefObject<HTMLElement | null>){

    const[isIntersect, setIsIntersect] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {

            if(entry.isIntersecting){

                setIsIntersect(true);
                obs.disconnect();

            }

        }, {threshold: 0.1});

        if(ref.current) obs.observe(ref.current);
        return() => obs.disconnect();

    }, [ref]);

    return isIntersect;

}