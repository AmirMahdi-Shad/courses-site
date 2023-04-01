import FillBtn from "@/components/utils/FillBtn";
import OutlineBtn from "@/components/utils/OutlineBtn";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <nav className='flex items-center justify- w-full px-[7.8vw] py-4'>
        {/* icon */}
        <div className='flex  items-center w-full font-caladea z-50'>
          <button className='p-3 bg-[#7F56D9] rounded-xl'>
            <Image
              src='/images/OnlineEducation.png'
              className=''
              width='35'
              height='35'
              alt=''
            />
          </button>
          <h2 className='ml-2 text-2xl font-bold'>Edujar</h2>
        </div>
        {/* items */}
        <ul className='flex items-center justify-around  w-full'>
          {["Home", "About", "Course", "Blog", "Contact"].map((item, index) => {
            return (
              <li key={index} className='cursor-pointer text-white '>
                <button>{item}</button>
              </li>
            );
          })}
        </ul>
        {/* Login /Get started btn */}
        <div className='flex justify-end items-center w-full justify-self-start gap-2'>
          <OutlineBtn text='login' />
          <FillBtn text='Get Started' />
        </div>
      </nav>
      <Image
        src='/images/Frame.png'
        className='absolute left-[474px] -top-6 '
        width='80'
        height='80'
        alt=''
      />
      <Image
        src='/images/Ellipse1199.png'
        className='absolute w-[426px] h-[426px] -left-[78px] -top-[126px] ellipse'
        width='50'
        height='50'
        alt=''
      />
      <Image
        src='/images/Ellipse1198.png'
        className='absolute w-[31.35vw] h-[31.35vw] left-[78.69vw] top-[6.92vw] ellipse'
        width='50'
        height='50'
        alt=''
      />
    </>
  );
};

export default NavBar;
