import Image from "next/image"
import Link from "next/link"
import React from "react"


export function Hero() {
    return (
        <div className=" h-[3000px]">
            <div className=" flex w-screen h-[10%] bg-black justify-center items-center text-white mb-11">       
                <h1 className=" text-[100%]">H</h1>
            </div>
            <div className="flex w-screen h-[10%] bg-orange-500 ">
                <div className="flex w-[50%] h-[90%] bg-slate-900 justify-center m-auto border-solid border-[10px] border-white">
                    <h1>H</h1>
                </div>
                <div className="flex ml-[5%] w-[50%] h-[90%] m-auto border-solid border-black border-[10px] ">
                    <div className=" w-full h-full bg-[url('/assets/unknown.png')] justify-center items-center">
                        <h1 className=" absolute">H</h1>
                            <div className=" flex w-full h-full bg-slate-900 ease-in-out duration-500 opacity-100 hover:opacity-0">                                
                        </div>
                    </div>              
                </div>
            </div>
            <div className=" w-[500px] h-[500px] bg-[url('/assets/h.jpg')] bg-red-600 rounded-full">
                <div className=" w-full h-full bg-indigo-700 ease-in-out duration-500 rounded-full scale-[100%] hover:scale-0"></div>
            </div>
        </div>
    )
}

export default Hero;