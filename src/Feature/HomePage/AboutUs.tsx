"use client"
import React from 'react'
import Image from 'next/image'
const AboutUs = () => {
    return (
        <section id='tentang-kami' className='grid md:grid-cols-2 lg:h-screen lg:p-20 max-lg:py-20 lg:pt-40 sm:pt-20 pt-10 w-full text-[#006A71]'>
            <div className='max-md:h-full'>
                <h2 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200" className='xl:text-6xl text-3xl text-center  -left-1 relative font-semibold'>Tentang Kami</h2>
                <p data-aos="fade-up" data-aos-duration="4000" data-aos-delay="300" className='text-start xl:text-3xl  sm:text-lg text-base font-medium lg:px-24 sm:px-14 px-5 lg:mt-20 mt-10 text-black'>
                    Kami menghadirkan properti eksklusif yang dirancang untuk memberikan kenyamanan, keamanan, dan nilai investasi tinggi. Setiap hunian yang kami tawarkan memiliki keunggulan dalam segi lokasi, desain, dan fasilitas, sehingga cocok untuk tempat tinggal maupun investasi jangka panjang.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="400" className='relative flex items-end justify-center xl:h-full max-lg:mt-5 h-96 max-md:w-11/12 max-md:mx-auto'>
                <Image src='/img/about.png' fill className='md:object-contain object-cover bottom-0 ' alt='home' />
            </div>

        </section>
    )
}

export default AboutUs