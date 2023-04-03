import Image from "next/image";
import {PhoneIcon,EnvelopeIcon,MapPinIcon} from '@heroicons/react/24/solid'
import { BsFacebook,BsTwitter } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className='pt-[5.2vw] pb-[3vw] px-[7vw] w-full h-full flex flex-col justify-center relative font-caladea'>
      <div className='flex justify-between border-b-2 pb-[2.083vw]  rounded-sm border-[#dadaf752] '>
        <div className='flex flex-col'>
          <div className='flex w-full items-center font-caladea '>
            <button className='p-[0.625vw] bg-[#7F56D9] rounded-xl'>
              <Image
                src='/images/OnlineEducation.png'
                className=''
                width='35'
                height='35'
                alt=''
              />
            </button>
            <h2 className='ml-[0.41vw]  font-bold text-white text-[1.5625vw]'>Edujar</h2>
          </div>
          <p className='w-[20vw] text-[#B0B0D1] font-inter mt-10'>
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="ml-10 mt-6">
          <h3 className='mb-[1.66vw] text-white font-bold text-[1.25vw]'>Quick Links</h3>
          <div className='flex gap-[2.083vw] font-inter text-[#B0B0D1]'>
            <div className='flex flex-col justify-between items-start flex-wrap gap-[1.04vw]'>
              <span>About</span>
              <span>Course</span>
            </div>
            <div className='flex flex-col justify-between items-start flex-wrap gap-[1.04vw]'>
              <span>Blog</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div className="ml-10 mt-6">
          <h3 className='mb-[1.66vw] font-bold text-white text-[1.25vw]'>Contact us</h3>

          <div className='flex flex-col justify-between items-start flex-wrap gap-[1.04vw]  font-inter text-[#B0B0D1]'>
            <span> <PhoneIcon className="w-[20px] inline"/>(209) 555-0104</span>
            <span className="w-64" > <EnvelopeIcon className="w-[20px]  inline"/>michelle.rivera@example.com</span>
          </div>
        </div>
        <div className='flex justify-center items-center ml-10 font-inter text-[#B0B0D1]'>
          <span><MapPinIcon className="w-[20px] inline "/>  2715 Ash Dr. San Jose, South Dakota 83475</span>
        </div>
      </div>
      <div className=' flex justify-between items-center p-[0.83vw] font-inter text-[#B0B0D1]'>
        <span>Copyright 2023 | All Rights Reserved</span>
        <span className="flex"><BsFacebook/> <BsTwitter/> <RiInstagramFill/></span>
      </div>
    </footer>
  );
};

export default Footer;
