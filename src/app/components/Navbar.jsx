import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
 

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
  return (
    <nav className='fixed top-0 right-0 left-0 bg-[#121212] bg-opacity-90'>
        <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-3">
            <Link href={"/"} className="text-xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4]">SHAH</Link>
            <div className="menu block md:w-auto" id="navbar">
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
    </nav>
  )
}

export default Navbar