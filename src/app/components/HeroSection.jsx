"use client";
import React from 'react'
import Image from 'next/image';

import { TypeAnimation } from 'react-type-animation';



export const HeroSection = () => {
  return (
  <section> 
    <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className = "text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4]">
              Hello, I'm{" "}
            </span>
            Hrishi 
            <br></br>
            <div className='relative inline-block'>
                <TypeAnimation
                className='text-transparent bg-clip-text bg-gradient-to-r from-white via-[#373B44] to-[#4286f4]'
                sequence={[
                    'Software Developer',
                    1000,
                    'Web Developer',
                    1000,
                    'UI/UX Designer',
                    1000,
                ]}
                wrapper="span"
                speed={20}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
                cursor={false} // Disable the default cursor
                />
                <span className="animate-blink">|</span>
            </div>
            <style jsx>{`
                @keyframes blink {
                50% {
                    opacity: 0;
                }
                }
                .animate-blink {
                position: absolute;
                right: -20px; /* Adjust this value to position the cursor correctly */
                top: 0;
                animation: blink 1s step-start infinite;
                }
            `}</style>
            </h1>
            <p className="text-[#ADB7Be] text-base sm:text-lg mb-6 lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
               
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-2 mb-3 bg-gradient-to-br from-[#373B44] via-blue-900 to-[#4286f4] hover:bg-gradient-to-br hover:from-[#4286f4] hover:via-blue-900 hover:to-[#373B44] ">Contact Me</button>

            <a href="/Hrishi_SWE_Resume.pdf" download="Hrishi_Shah_Software_Engineering_Resume.pdf">
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#373B44] via-blue-900 to-[#4286f4]'>
                    <span className='block bg-[#121212] hover:bg-gradient-to-br hover:from-[#373B44] hover:via-blue-900 hover:to-[#4286f4] rounded-full px-5 py-2'>Download CV</span>
                </button>
            </a>    
            </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
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
