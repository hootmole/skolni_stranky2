import React, {useState} from "react";
import Image from "next/image"
import Link from "next/link"


export function Navbar() {
    const [is_nav, set_nav] = useState(false)

    const nav_toggle = () => {
        set_nav(!is_nav);
        const bodyEl = document.getElementsByTagName("body")[0];
        is_nav ? bodyEl.style.overflow = "auto" : bodyEl.style.overflow = "hidden";
    }


    return (
        <div className='fixed w-full h-20 z-[100] flex'>
            <nav className="flex">
                <Image src="/assets/GK-logo.png" alt="/" width={80} height={80} className="z-[200]"></Image>
                <div className={"flex fixed top-0 right-0 h-20 w-40 justify-center bg-slate-400 cursor-pointer"} onClick={nav_toggle}>
                    <Image src="/assets/menu-icon.svg" alt="/" width={30} height={30}></Image>
                    <div className="flex items-center">
                        <h3 className="pl-5 text-2xl pb-1 cursor-pointer">Menu</h3>
                    </div>
                    
                </div>
            </nav>

            <div className={
                is_nav
                    ? "fixed left-0 top-0 w-[100vw] h-full bg-main_blue opacity-100 ease-out duration-300"
                    : "fixed left-[0] top-[-100%] w-[100vw] h-full bg-main_blue opacity-100 ease-out duration-300"
                }>
                <div className="flex absolute top-0 right-0 h-20 w-40 justify-center items-center bg-slate-400" onClick={nav_toggle}>
                    <Icon_close fill="#000000" width={35} height={35}/>
                    <h3 className="pl-5 text-2xl pb-1">Close</h3>
                </div>
                
                <div className="flex w-[100%] h-[80%] items-center">
                    <ul className="">
                        <li className=""><h2>Skola a LOLko</h2></li>
                        <li className=""><h2>Skola a LOLko</h2></li>
                        <li className=""><h2>Skola a LOLko</h2></li>
                        <li className=""><h2>Skola a LOLko</h2></li>
                        <li className=""><h2>Skola a LOLko</h2></li>
                    </ul>
                </div>
                <div className="absolute bottom-0 w-screen bg-slate-400 h-[10vw]">Telefoni cisla atd</div>
            </div>

        </div>
        
    )
}

const Icon_close = ({fill, width, height}) => {
    return (
        <svg height={height} width={width} fill={fill} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.878 122.88"  ><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"/></g></svg>
    );
}

export default Navbar;
