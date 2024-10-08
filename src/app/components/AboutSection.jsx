/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = 
[
    {
        title: "Languages",
        id: "Languages",
        content: 
        (
            <ul className='list-disc pl-2 text-[#ADB7Be]'>
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>C/C++/C#</li>
                <li>MongoDB</li>
                <li>SQLite3</li>
                <li>MySQL</li>
                <li>HTML & CSS</li>
            </ul>
        ),
    },
    {
        title: "Frameworks",
        id: "Frameworks",
        content: 
        (
            <ul className='list-disc pl-2 text-[#ADB7Be]'>
                <li>Django</li>
                <li>Flask</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Express.js</li>
                <li>scikit-learn</li>
                <li>PyTorch</li>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "Education",
        content: 
        (
            <ul className='list-disc pl-2 text-[#ADB7Be]'>
                <li>University of Alberta Computing Science</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "Certifications",
        content: 
        (
            <ul className='list-disc pl-2 text-[#ADB7Be]'>
                <li>IBM Full Stack Software Developer Professional Certificate</li>
                <li>IBM DevOps and Software Engineering Professional Certificate</li>
                <li>University of Alberta Product Management Professional Certificate</li>
                <li>IBM Network & Database Certificate</li>
                <li>Meta Back-End Developer Professional Certificate</li>
                <li>University of Minnesota Software Testing and Automation Specialization </li>
            </ul>
        ),
    }


]


const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition(); 

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
  }


  /*
  Neon Text code

  mr-3 font-semibold  hover:text-[#4286f4] w-30 h-10 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] px-5
  */
  return (
    <section className='text-white' id='about'>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/canva5.png" width={400} height={400}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4] py-2'>About Me</h2>
                <p className='text-base lg:text-lg text-[#ADB7Be]'>
                I am a Fourth year student at the University of Alberta studying Computing Science. 
                I am a current Wireless Systems Engineering intern at Glencore. I have a passion for software development and machine learning with a emphasis on mathematics and statistics.
                Currently I am honing my skills in software engineering and machine learning along with mathematics and statistics and attempting to apply them to real world problems.
                You will find all of my certifcations, Education, and work experience below. 
                
                </p>
                <div className='flex flex-row justify-start mt-8 overflow-x-auto'>
                    <TabButton selectTab={() => handleTabChange("Languages")} active ={tab === "Languages"}> Languages</TabButton> 
                    <TabButton selectTab={() => handleTabChange("Frameworks")} active ={tab === "Frameworks"}> Frameworks</TabButton>
                    <TabButton selectTab={() => handleTabChange("Education")} active ={tab === "Education"}> Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("Certifications")} active ={tab === "Certifications"}> Certifications</TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
            </div>
        </div>
    </section>
  )
};

export default AboutSection;
