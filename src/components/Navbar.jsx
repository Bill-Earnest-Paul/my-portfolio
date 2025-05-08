import React,{useState} from 'react'
import {FiMenu, FiX} from 'react-icons/fi';
export default function Navbar() {
    const [isToggle,setIsToggle]=useState(false);
    const NavbarLinks=[
        {id:1,name:'Home',link:'#home'},
        {id:2,name:'About',link:'#about'},
        {id:3,name:'Skills',link:'#skills'},
        {id:4,name:'My Projects',link:'#projects'},
    ]
  return (
    <header className='fixed top-0 left-0 w-full z-50 text-white' data-aos='fade-up' data-aos-delay='300'>
        <div className='container mx-auto flex items-center justify-between p-5'>
            {/* Logo*/}
            <a href="#home" className='text-4xl font-bold italic text-white hover:text-amber-500 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition-all duration-500 '>Welcome!</a>
            {/* Mobile menu toggle */}
            <button className='md:hidden focus:outline-none' onClick={()=>setIsToggle(!isToggle)}>
                <FiMenu className="w-8 h-8 text-white"/>
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-7'>
                {NavbarLinks.map((link)=>(
                    <a key={link.id} href={link.link} className='hover:text-green-400 text-lg transition-colors duration-500'>
                        {link.name}
                    </a>
                ))}
                



            </nav>
        </div>
        {/* Mobile Navigation */}
        <div className={`${isToggle? 'block':'hidden'} md:hidden bg-emerald-600 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}>
            <button className="absolute top-5 right-5 text-white" onClick={()=>setIsToggle(false)}>
                <FiX className="w-8 h-8"/>    
            </button> 
            {/* Mobile Navigation */}
            {NavbarLinks.map((link)=>(
                <a key={link.id} href={link.link} className="text-lg text white hover:text-blue-700 shadow-amber-900" onClick={()=>setIsToggle(false)}>
                    {link.name}
                </a>
            ))}
            
        </div>
    </header>
  )
}
