import React from 'react'
import Image from 'next/image';
export const HeroSection = () => {
  return (
  <section> 
    <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
            <h1 className = "text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                Hey, I'm Hrishi
            </h1>
            <p className="text-[#ADB7Be] text-lg lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className="col-span-5 place-self-center">
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <Image 
                src="/images/canva2.png"
                alt = "hrishi image"
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={300}
                height={300}
                />
            </div>
        </div>
    </div>
  </section>
  
    );
};

export default HeroSection; 
