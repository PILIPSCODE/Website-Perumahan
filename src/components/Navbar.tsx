"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Navbar = () => {
    const [active, setActive] = useState(false)
    return (
        <div className=' fixed z-50 w-full text-2xl text-[#006A71]'>
            <div className='absolute z-50 -top-3   w-auto -right-4  p-8 lg:px-20  rounded-3xl  bg-white'>
                <div className='flex gap-8 mt-3 max-lg:hidden'>
                    <Link href={"/#home"}>Home</Link>
                    <Link href={"/#unit-rumah"}>Product</Link>
                    <Link href={"/#fasilitas"}>Fasilitas</Link>
                    <Link href={"/#tentang-kami"}>Tentang Kami</Link>
                    <Link href={"/#kontak-kami"}>Kontak Kami</Link>
                </div>
                <button onClick={() => setActive(!active)} className='right-1 relative top-2 lg:hidden'>{active ? <FaX /> : <FaBars />}</button>
            </div>
            <div className={`flex flex-col duration-300 lg:hidden gap-8 justify-center items-center absolute   ${active ? "right-0" : "-right-full"} h-screen w-96 max-sm:w-screen bg-white`}>
                <Link href={"/#home"}>Home</Link>
                <Link href={"/#unit-rumah"}>Product</Link>
                <Link href={"/#fasilitas"}>Fasilitas</Link>
                <Link href={"/#tentang-kami"}>Tentang Kami</Link>
                <Link href={"/#kontak-kami"}>Kontak Kami</Link>
            </div>
        </div>
    )
}

export default Navbar