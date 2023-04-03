import Link from "next/link";
import { useState } from "react";

const Courses = () => {
  return (
    <section className=' w-full px-[7.8vw] py-[2.5vw]'>
      <div className='flex justify-between items-center '>
        <h3 className='text-[3.6vw] mt-[1.8vw] font-caladea font-[700]'>
          <span className='text-[#fff]'>Popular </span>
          <span className='text-[#BDA0FF]'>Courses</span>
        </h3>
        <div className='w-[46.82vw] h-[5.15625vw] rounded-[2.578125vw] bg-[#ffffff1a] flex justify-between items-center p-[0.6vw] text-[0.9375vw] font-inter'>
          {[
            "Design",
            "Development",
            "Business",
            "Data Science",
            "Marketing",
          ].map((text, index) => {
            return (
              <div key={index}>
                <input
                  type='radio'
                  value={text}
                  id={index}
                  className='hidden'
                />
                <label
                  htmlFor={index}
                  className={`w-[6.04vw] h-[1.45vw] text-center  px-[2vw] py-[1.45vw] rounded-full cursor-pointer hover:bg-[#7f56d98a] transition-all  ${
                    index === 0 && "bg-[#7F56D9]"
                  }`}
                >
                  {text}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      {/* Card box */}
      <div className='flex flex-wrap justify-between mt-[2vw] gap-y-10 '>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div
              key={index}
              className='w-[27.083vw] h-[35.57vw] bg-[#381D74] rounded-[1.56vw] border-2 border-[#ffffff33] flex flex-col overflow-hidden '
            >
              <img src={`/images/card${item}.png`} alt='' />
              {/* card Body */}
              <div className='p-[1.3vw] flex flex-col justify-between text-center gap-[1vw] font-inter  text-[#D9ECFF]'>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-[1vw]'>
                    <button className='bg-[#7966EA] w-[1.45vw] h-[1.45vw] rounded-full flex items-center justify-center'>
                      <img src='/images/play.png' alt='' />
                    </button>
                    <p>10x Lesson</p>
                  </div>
                  <button className='w-[5.4vw] h-[1.8vw] rounded-[0.91vw] bg-[#dadaf738]'>
                    Design
                  </button>
                </div>
                <div>
                  <h3 className=' text-[1.5vw] font-bold leading-[2vw] border-b-2 py-[1.6vw] border-[#dadaf752]'>
                    Python for Financial Analysis Next and Algorithmic Trading
                  </h3>
                </div>
                <div className='border-b-2 pb-[1vw] border-[#dadaf752] flex '>
                  <div className='w-3/4 flex'>
                    <img
                      src='/images/profile.png'
                      className='aspect-auto w-[2.3vw] h-[2.3vw]'
                      alt=''
                    />
                    <div className='flex flex-col items-start ml-[1vw] '>
                      <h4>Adam Smith</h4>
                      <p>Python Developer</p>
                    </div>
                  </div>
                  <div className='border-l-2 border-[#dadaf752] w-1/4 flex items-center pl-[0.8vw]'>
                    <p>50+ Student</p>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <img src='/images/stars.png' alt='' />
                  <Link href='#' className='border-b-2 border-[#dadaf752]'>
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Courses;
