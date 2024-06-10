import Link from "next/link"

const NavLink = ({ href, title}) => 
{ 
    return (
        <Link 
        href = {href}
        className='block py-2 pl-3 pr-4 text-[#373B44] sm:text-xl rounded md:p-0 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4]'
        >
            {title}
        </Link>
    );
}; 

export default NavLink;