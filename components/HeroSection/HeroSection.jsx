import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className='w-[56.43vw]'>
        <h3 className='text-[3.6vw] mt-[1.8vw] font-caladea font-[700] w-2/3'>
          <span className='text-[#BDA0FF]'>Best courses </span>
          <span className='text-[#fff] '>
            are waiting to enrich your skill
            <span className='absolute left-[20vw]  bottom-[24.5vw] flex gap-6'>
              <Image src='/images/Star.png' width='50' height='50' alt='' />
              <Image src='/images/Star.png' width='50' height='50' alt='' />
              <Image src='/images/Star.png' width='50' height='50' alt='' />
            </span>
          </span>
        </h3>
        <p className='text-[#B0B0D1] text-[1.1vw] font-inter font-[500] leading-[2vw] mt-[3.17vw] w-2/3'>
          Provides you with the latest online learning system and material that
          help your knowledge growing.
        </p>
      </div>
      <form className='relative w-[51.35vw] h-[5.15vw] mt-24'>
        <input
          type='text'
          placeholder='Want to learn?'
          className=' flex items-center justify-between w-[44.27vw] h-[5.15vw] text-[1.25vw] rounded-full bg-white p-[0.83vw] px-[2.916vw] text-primary-100'
        />
        <Image
          src={`/images/search.png`}
          width='30'
          height='30'
          className='absolute left-0 top-[1.75vw] mx-[0.83vw]'
          alt=''
        />

        <button className='px-[2.083vw] py-[1.4vw] bg-[#7F56D9] rounded-full text-[1.04vw] absolute top-[0.41vw] right-[7.6vw]'>
          Explore
        </button>
      </form>

      <Image
        src='/images/circleVec.png'
        className='absolute left-0 right-[90.59%] top-[17%] bottom-[93.3%]'
        width='50'
        height='50'
        alt=''
      />
      <Image
        src='/images/CircleRed.png'
        className='absolute left-[94.5%]  top-[12%] bottom-[96.43%]'
        width='30'
        height='30'
        alt=''
      />
      <Image
        src='/images/heroicon.png'
        className='absolute w-[31.73vw] h-[42.340625vw] left-[57.08%] right-[11.19%] top-[16%] bottom-[84.65%] z-50'
        width='820'
        height='820'
        alt=''
      />
    </>
  );
};

export default HeroSection;
