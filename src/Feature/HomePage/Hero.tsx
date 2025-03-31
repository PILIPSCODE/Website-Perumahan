"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/Button'

const Hero = () => {
    return (
        <section id='home' className='h-screen bg-hero w-full xl:text-3xl sm:text-2xl  text-base relative '>
            <div className='w-full h-full bg-black/50 -z-0 absolute'>
            </div>
            <div className='relative z-0 lg:grid-cols-2 grid h-full w-full  border-white'>
                <div className='text-white flex justify-center items-start  pl-20 max-xl:px-20 max-md:px-5  gap-4 pt-20 flex-col'>
                    <p data-aos="fade-up" data-aos-duration="4000" data-aos-delay="100" className='font-medium'>Perumahan Laweyan</p>
                    <div>
                        <h1 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200" className='2xl:text-8xl lg:text-7xl sm:text-6xl text-4xl    -left-1 relative font-extrabold'>New Legian Residence</h1>
                        <p data-aos="fade-up" data-aos-duration="4000" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit impedit omnis aliquid unde atque labore, temporibus eos porro ea!</p>
                    </div>
                    <div className="flex  gap-4 mt-5 items-center w-full">
                        <Button variant="secondary" size="lg" className="xl:w-96 md:w-60  sm:w-44  max-sm:py-2 max-sm:px-4" data-aos="fade-up" data-aos-duration="4000" data-aos-delay="800">
                            Tipe Unit
                        </Button>
                        <Button variant="primary" size="lg" className="xl:w-96 md:w-60  sm:w-44 max-sm:py-2 max-sm:px-4" data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1000">
                            Lokasi
                        </Button>
                    </div>
                </div>
                <div className='flex items-end'>
                    <div className=' w-full lg:h-1/2 h-full ' data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="1000"
                        data-aos-duration="2000">
                        <Image src='/img/home.png' fill className='object-cover max-lg:object-contain absolute  bottom-0' alt='home' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero