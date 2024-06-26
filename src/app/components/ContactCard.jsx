import Image from 'next/image';
import React from 'react';

const CardComponent = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4] mt-4 mb-8' id='contact' >Contact Me</h2>
      <div className='flex justify-center items-center'>
        <div className="relative flex flex-col justify-center items-center text-gray-700 bg-[#141414] shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-[#141414] shadow-lg bg-clip-border rounded-xl h-80">
            <img src="/images/Canva3.png" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-1 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4]">
              Hrishi Shah
            </h4>
            <p className="block mb-2 font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4]">
              hrishishahh@gmail.com
            </p>
            <div className="flex justify-center gap-4 py-4">
            <a href="https://www.linkedin.com/in/hrishi-shah-17470a24a/" target='_none'>
                <Image
                    src="/images/linkedin.png"
                    height={25}
                    width={25}
                />
            </a>
            <a href="https://github.com/Hrishirt" target='_none'>
                <Image
                    src="/images/github.png"
                    height={25}
                    width={25}
                />
            </a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
