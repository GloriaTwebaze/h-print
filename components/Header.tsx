import React from 'react'

export default function Header() {
  return (
    <header className='w-full bg-white'>
    <nav className='flex items-center justify-between px-6 py-4 mx-auto max-w-7xl'>
        <div className='relative'>
        <img src="/Logo.png" alt="" className='w-[200px] h-auto hidden md:block'/>
        {/* mobile logo */}
        </div>
        <ul className='flex items-center gap-2.5 text-xs  uppercase'>
            <li><a href="#">3D models</a></li>
            <li><a href="#">about</a></li>
        </ul>
    </nav>
    </header>
  )
}
