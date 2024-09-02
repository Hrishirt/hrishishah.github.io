/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
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
            <div className='relative inline-block mb-3'>
                <TypeAnimation
                className='text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4] '
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
                style={{ display: 'inline-block', paddingBottom: '0.15em' }}
                repeat={Infinity}
                cursor={true} // Bug fix needed: When typign the text in a gradient, the cursor disappears. 
                />
            </div>
            


            </h1>
            <p className="text-[#ADB7Be] text-base sm:text-lg mb-6 lg:text-xl">
                Welcome to my portfolio website! Made with Next.js, Tailwind CSS, and TypeScript. 
            </p>
            <div>
            
            <a href='#contact'>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-2 mb-3 bg-gradient-to-br from-[#373B44] via-blue-900 to-[#4286f4] hover:bg-gradient-to-br hover:from-[#4286f4] hover:via-blue-900 hover:to-[#373B44]" href="/#contact">Contact Me</button>
            </a>
            <a target="_blank" href="/Hrishi_SWE_Resume.pdf" >
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#373B44] via-blue-900 to-[#4286f4]'>
                    <span className='block bg-[#121212] hover:bg-gradient-to-br hover:from-[#373B44] hover:via-blue-900 hover:to-[#4286f4] rounded-full px-5 py-2'>My Resume</span>
                </button>
            </a>    
            </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className='w-60 h-60 lg:w-80 lg:h-80 flex justify-center items-center text-sky-200 border-2 rounded-full border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] relative'>
                <Image 
                src="/images/canva2.png"
                alt = "hrishi image"
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={400}
                height={400}
                />
            </div>
        </div>
    </div>

  </section>
  
    );
};

export default HeroSection; 
