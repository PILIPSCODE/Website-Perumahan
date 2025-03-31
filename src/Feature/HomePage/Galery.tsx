"use client"
import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee";

const Galery = () => {
    return (
        <div className='relative '>
            <div className='absolute w-full z-40 -top-4'>
                <Marquee>
                    <div className='flex text-4xl font-medium'>
                        {[...Array(10)].map((_, index) => (
                            <h1
                                key={index}
                                className={`text-3xl px-16 py-2 ${index % 2 === 0 ? 'bg-white text-black' : 'bg-[#00FCFF] text-black'}`}
                            >
                                Gallery
                            </h1>
                        ))}
                    </div>
                </Marquee>
            </div>
            <div className='h-screen overflow-hidden max-lg:justify-center  flex max-lg:flex-col '>
                <div className='w-full h-full  absolute z-10 lg:-left-1/3'>
                    <Image src={'/img/shadow-galery.png'} alt='shadow' fill className='object-cover max-lg:rotate-180 ' />
                </div>
                <div className='w-1/2 h-full max-lg:hidden'>

                </div>
                <div className='h-full max-lg:w-full w-1/2 absolute z-20'>
                    <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200" className=' text-white left-16 lg:pl-28 pl-10 z-10 w-full h-full flex-col flex justify-center items-start'>
                        <h1 className='xl:text-6xl text-4xl  font-medium'>Gallery</h1>
                        <h2 className='xl:text-8xl text-6xl  text-[#00FCFF] text-center font-extrabold'>New Legian</h2>
                        <h2 className='xl:text-8xl text-6xl  text-[#00FCFF] text-center font-extrabold'>Residance</h2>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="4000" data-aos-delay="400" className=' items-center w-full  relative rotate-3 z-0  flex'>
                    <div className='flex flex-col  gap-2'>
                        <Image src="/img/galery1.png" width={600} height={600} alt='galery1' />
                        <Image src="/img/galery2.png" width={600} height={600} alt='galery2' />
                    </div>
                    <div className='flex flex-col gap-2 mx-2'>
                        <Image src="/img/galery3.png" width={600} height={600} alt='galery3' />
                        <Image src="/img/galery4.png" width={600} height={600} alt='galery4' />
                        <Image src="/img/galery5.png" width={600} height={600} alt='galery5' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image src="/img/galery6.png" width={600} height={600} alt='galery6' />
                        <Image src="/img/galery7.png" width={600} height={600} alt='galery7' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Galery