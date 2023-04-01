import Image from "next/image";
import Slider from "./slider";

export default function Testimonias(){
    return (<div className="w-full px-[22.60vw] pt-[7.86vw] pb-[8.22vw] relative">
        <div className="absolute right-0 top-[50%] translate-x-[50%] translate-y-[-50%] w-[36.14vw] h-[36.14vw] bg-[#3D5CFF33] blur-[7.8125vw] "></div>
        
        <PeapleImage src={'/assets/image/testimonias/peaple.png'} className="w-[3.17vw] h-[3.17vw] bottom-[10.67vw] right-[14.68vw]" />
        <PeapleImage src={'/assets/image/testimonias/peaple.png'} className="w-[5.3125vw] h-[5.3125vw] top-[22.70vw] right-[8.59vw]" />
        <PeapleImage src={'/assets/image/testimonias/peaple.png'} className="w-[8.22vw] h-[8.22vw] top-[6.77vw] right-[17.81vw]" />

        <PeapleImage src={'/assets/image/testimonias/peaple.png'} className="w-[3.95vw] h-[3.95vw] top-[10.20vw] left-[22.96vw]" />
        <PeapleImage src={'/assets/image/testimonias/peaple.png'} className="w-[6.97vw] h-[6.97vw] top-[20.67vw] left-[6.77vw]" />
        <PeapleImage src={'/assets/image/testimonias/peaple.png'} className="w-[5.15vw] h-[5.15vw] bottom-[8.48vw] left-[12.18vw]" />


        <h3 className="text-[3.6vw] font-caladea font-[700] leading-[2.96vw] text-center"><span className="text-white">Testimonias</span></h3>
        <div id="slider" className="w-[54.42vw] mt-[8.125vw] border-[2px] border-[rgba(255,255,255,0.2)] rounded-[1.5625vw] bg-[#381D74] min-h-[21.875vw]">
            <Slider />
        </div>
    </div>);
}

function PeapleImage({src,className}){
    return (<div className={`absolute rounded-full overflow-hidden ${className}`}>
        <Image src={src} fill alt="peaple" />
    </div>);
}