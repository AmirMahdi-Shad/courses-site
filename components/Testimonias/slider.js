"use client";
import { Navigation, Pagination, Scrollbar, A11y,  Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef,useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const slides = [
    {
        avatar:"/assets/image/testimonias/adam-smith.png", 
        name:"Adam smith" , 
        position:"Python developer",
        score:0,
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
    {
        avatar:"/assets/image/testimonias/adam-smith.png", 
        name:"Adam smith" , 
        position:"Python developer",
        score:1,
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
    {
        avatar:"/assets/image/testimonias/adam-smith.png", 
        name:"Adam smith" , 
        position:"Python developer",
        score:2,
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
    {
        avatar:"/assets/image/testimonias/adam-smith.png", 
        name:"Adam smith" , 
        position:"Python developer",
        score:3,
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
    {
        avatar:"/assets/image/testimonias/adam-smith.png", 
        name:"Adam smith" , 
        position:"Python developer",
        score:4,
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    },

];

export default function Slider(){
    const nextBtn = useRef(null);
    const prevBtn = useRef(null);

    const [_, setInit] = useState();

    return (<>
        <Swiper
            modules={[Autoplay,Navigation]}
            navigation={{
                nextEl:nextBtn.current,
                prevEl:prevBtn.current,
            }}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay:5000,
                disableOnInteraction: false,
            }}
            onInit={()=>setInit(true)}
        >
            {slides.map((slide,index)=><SwiperSlide key={index} slide={slide}><Slide slide={slide} /></SwiperSlide>)}
        </Swiper>
        <div className="h-[2.083vw] px-[4.083vw] text-right mb-[2.083vw]">
            <button className="w-[2.083vw] h-[2.083vw] p-[0.3vw]" ref={prevBtn}><img className="w-full h-full" src={'/assets/image/prev.svg'} alt={"prev slider"} /></button>
            <button className="w-[2.083vw] h-[2.083vw] p-[0.3vw]" ref={nextBtn}><img className="w-full h-full" src={'/assets/image/next.svg'} alt={"prev slider"} /></button>
        </div>
    </>);
}

function Slide({slide}){
    return (<div className="w-full py-[2.5vw] px-[2.083vw]">
            <header className="h-[3.8015vw] flex justify-between pb-[1.5625vw]">
                <div data="avatar" className="flex">
                    <div className="h-[2.239vw] w-[2.239vw] bg-[#c0c0c0] rounded-full overflow-hidden relative">
                        <img src={slide.avatar} alt={slide.name} />
                    </div>
                    <div className="ml-[0.98vw] flex flex-col ">
                        <span className="text-white font-600 font-inter text-[0.9375vw]">{slide.name}</span>
                        <span className="text-[#D9ECFF] font-400 text-[0.7291vw]">{slide.position}</span>
                    </div>
                </div>
                <div data="score" className="flex flex-col justify-center">
                    <Score score={slide.score} />
                </div>
            </header>
            <div className="bg-[#DADAF752] h-[1px] w-full"></div>
            <p className="text-white pt-[2.96vw] pr-[0.96vw] font-400 leading-[1.666vw] text-[1.041vw] mb-[0.5vw]">{slide.comment}</p>
    </div>);
}

function Score({score}){
    if(score==0){
        return (<div className="flex gap-[0.26041vw]">
            <Star fill={false} />
            <Star fill={false} />
            <Star fill={false} />
            <Star fill={false} />
            <Star fill={false} />
        </div>);
    }else if(score==1){
        return (<div className="flex gap-[0.26041vw]">
            <Star fill={true} />
            <Star fill={false} />
            <Star fill={false} />
            <Star fill={false} />
            <Star fill={false} />
        </div>);
    }else if(score==2){
        return (<div className="flex gap-[0.26041vw]">
            <Star fill={true} />
            <Star fill={true} />
            <Star fill={false} />
            <Star fill={false} />
            <Star fill={false} />
        </div>);
    }else if(score==3){
        return (<div className="flex gap-[0.26041vw]">
            <Star fill={true} />
            <Star fill={true} />
            <Star fill={true} />
            <Star fill={false} />
            <Star fill={false} />
        </div>);
    }else if(score==4){
        return (<div className="flex gap-[0.26041vw]">
            <Star fill={true} />
            <Star fill={true} />
            <Star fill={true} />
            <Star fill={true} />
            <Star fill={false} />
        </div>);
    }else{
        return (<div className="flex gap-[0.26041vw]">
            <Star fill={true} />
            <Star fill={true} />
            <Star fill={true} />
            <Star fill={true} />
            <Star fill={true} />
        </div>);
    }


}

function Star({fill}){
    if(fill===true){
        return (<div className="w-[0.8854vw] h-[0.8854vw] relative">
            <img src={"/assets/image/star-golden.svg"} alt="star fill" />
        </div>);
    }else{
        return (<div className="w-[0.8854vw] h-[0.8854vw] relative">
            <img src={"/assets/image/star.svg"} alt="star fill" />
        </div>);
    }
    
}