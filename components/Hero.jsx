import Image from "next/image"
import Link from "next/link"
import React from "react"


export function Hero() {
    return (
        <div className="">
            <div className=" w-screen h-[600px] bg-neutral-600">
                
            </div>
            <div className=" w-[500px] h-[500px] bg-[url('/assets/h.jpg')] bg-red-600 rounded-full">
                <div className=" w-full h-full bg-indigo-700 ease-in-out duration-500 rounded-full scale-[100%] hover:scale-0"></div>
            </div>
        </div>
    )
}

export default Hero;