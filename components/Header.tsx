import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='w-full bg-white'>
    <nav className='flex items-center justify-between px-6 py-4 mx-auto max-w-7xl'>
      <Link href="/">
        <div className='relative'>
        <Image width={350} height={350} src="/Logo.png" alt="" className='w-[200px] h-auto hidden md:block'/>
        {/* mobile logo */}
        </div>
        </Link>
        <ul className='flex items-center gap-2.5 text-xs  uppercase'>
            <li><Link href="/3D-models">3D models</Link></li>
            <li><Link href="/about">about</Link></li>
        </ul>
    </nav>
    </header>
  )
}
