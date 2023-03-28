import women from "./women.svg";

import instructor from "./instructor.svg";
import student from "./student.svg";
import video from "./video.svg";

export default function WomenSection() {
  return (
    <div className='bg-[#312252] w-full px-[7.8vw] py-[5.6vw]'>
      <div className='w-full flex gap-[6.17vw]'>
        <div data='women-svg-holder' className=' w-[37.4vw] relative'>
          <img src={women.src} className='z-10 relative' />
          <div className='w-[36.14vw] h-[36.14vw] absolute bg-[#3D5CFF33] rounded-full blur-[7.8vw] left-[-23.5vw] top-[2.96vw] z-0'></div>
        </div>
        <div data='women-section-intro' className='w-[56.43vw]'>
          <h3 className='text-[3.6vw] mt-[1.8vw] font-caladea font-[700]'>
            <span className='text-[#fff]'>What is our</span>{" "}
            <span className='text-[#BDA0FF]'>difference</span>
          </h3>
          <p className='text-[#B0B0D1] text-[1.1vw] font-inter font-[500] leading-[2vw] mt-[3.17vw]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ex ea
            commodo consequat.{" "}
          </p>
          <p className='text-[#B0B0D1] text-[1.1vw] font-inter font-[500] leading-[2vw] mt-[2.1vw]'>
            {" "}
            ut labore et dolore magna aliqua. ex ea commodo consequat.{" "}
          </p>
          <div className='mt-[4.1vw] h-[4.3vw] flex'>
            <Item icon={instructor} label={"300"} labelText={"Instructor"} />
            <Item icon={student} label={"20,000+"} labelText={"Instructor"} />
            <Item icon={video} label={"10,000+"} labelText={"Instructor"} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ icon, label, labelText }) {
  return (
    <div className='w-[33.33%] h-full flex gap-[1.25vw]'>
      <div className='h-[4.3vw] w-[4.3vw] p-[1.04vw] rounded-full bg-[linear-gradient(180deg,_#A582F7_0%,_#7747EC_100%)] leading-[2vw]'>
        <img src={icon.src} className='w-full h-full' />
      </div>
      <div className='py-[1px]'>
        <div className='font-[700] text-[1.6vw] text-white font-caladea'>
          {label}
        </div>
        <div className='mt-[0.4vw] leading-[1.4vw] text-[1.04vw] text-[#B0B0D1] font-inter'>
          {labelText}
        </div>
      </div>
    </div>
  );
}
