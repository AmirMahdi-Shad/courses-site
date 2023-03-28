import Link from "next/link";
import Image from "next/image";

import DotFrames from "./dot_frame.svg"

export default function FooterJoinCart(){
    return (<div id="footer-join-carts" className="bg-[#37265D6E] py-[5.2vw] px-[15.62vw] relative">
        <div className="absolute w-[15.625vw] h-[15.729vw] top-[4.28vw] left-[-3.59vw]">
            <Image src={DotFrames.src} fill alt={'dot bg'} />
        </div>
        <div className="absolute w-[15.625vw] h-[15.729vw] top-[4.28vw] right-[-3.59vw]">
            <Image src={DotFrames.src} fill alt={'dot bg'} />
        </div>
        <div className="flex gap-[8.75vw] w-full">
            <div id="inavation-text" className="w-[39.68vw]">
                <h3 className="text-[3.6vw] font-caladea font-[700] leading-[4.27vw]">
                    <span className="text-[#fff]">Join our</span> <span className="text-[#BDA0FF]">worlds largest</span> <span className="text-[#fff]">learning platform today</span>
                </h3>
                <p className="text-[1.25vw] mt-[3vw] font-[400] font-inter text-white ">Start learning by registering and get 30 days free trail</p>
            </div>
            <div id="invation-buttons" className="w-[19.79vw] pt-[2vw] font-inter">
                <div className="w-full">
                    <Link href={'#'} className="block bg-[#FF5156] w-full h-[4.16vw] leading-[4.16vw] text-center rounded-full text-white text-[1.14vw] ">Join as Instructor</Link>
                </div>
                <div className="w-full mt-[2.44vw]">
                    <Link href={'#'} className="block bg-[#7F56D9] w-full h-[4.16vw] leading-[4.16vw] text-center rounded-full text-white text-[1.14vw]">Join as Instructor</Link>
                </div>
            </div>
        </div>
    </div>);
}