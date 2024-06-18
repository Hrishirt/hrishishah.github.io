import React from 'react'

// Self note: fixed the TabButton issue added the {} 
const TabButton = ( {active, selectTab, children }) => {
const buttonClasses = active 
? 'text-[#4286f4] border-b border-[#4286f4] font-bold' 
: 'text-transparent bg-clip-text bg-gradient-to-r from-[#373B44] to-[#4286f4] ';

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold  hover:text-[#4286f4] ${buttonClasses}`} >
            {children}
        </p>
    </button>
  )
}

export default TabButton
