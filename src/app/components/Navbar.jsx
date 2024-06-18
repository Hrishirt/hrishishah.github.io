/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";;
import MenuOverlay from './MenuOverlay';
const NavLinks = 
[
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Experience",
        path: "#experience"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#about"
    }

]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 right-0 left-0 bg-[#121212] z-10 bg-opacity-95'>
        <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-3">
            <Link href={"/"} className="text-xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4]">SHAH</Link>
            <div className='mobile-menu block md:hidden'>
            {
                !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-[#373B44] text-[#4286f4] hover:text-[#373B44] hover:border-[#4286f4]'>
                        <Bars3Icon className='h-3 w-3'/>
                    </button>
                 ) : (
                    <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-[#373B44] text-[#4286f4] hover:text-[#373B44] hover:border-[#4286f4]'>
                    <XMarkIcon className='h-3 w-3'/>
                    </button>
                    
            )}
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
                    {
                        NavLinks.map((link, index) => (
                            <li>
                                <NavLink href={link.path} title = {link.title}/>
                            </li> 
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className='delay-500'>
            {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
        </div>
    </nav>
  )
}

export default Navbar