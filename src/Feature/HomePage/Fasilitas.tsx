"use client"
import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaLocationPin } from 'react-icons/fa6';
import { TbArrowFork } from 'react-icons/tb';
const Fasilitas = () => {
    return (
        <section id='fasilitas' className='md:h-screen bg-fasilitas xl:p-40 p-10 relative'>
            <div className='absolute h-full w-full z-0 left-0 top-0 bg-black/50'></div>
            <div className='z-10 relative text-white  '>
                <h2 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200" className='text-6xl text-center -left-1 relative font-extrabold'>Fasilitas</h2>
                <div className='grid md:grid-cols-3 text-xl place-items-center mt-10 gap-5  md:mt-20'>
                    <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="400" className='w-60 mx-3 flex flex-col items-center gap-7 text-center'>
                        <h3 className='text-[#006A71] text-7xl'><FaLocationPin /></h3>
                        <p className='mt-5 font-bold'>Lokasi dekat dengan
                            jalan raya Gumpang dan
                            kampus ITBAAS
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="600" className='w-60 mx-3 md:-translate-y-10 flex flex-col items-center gap-7 text-center'>
                        <h3 className='text-[#006A71] text-7xl'><FaHome /></h3>
                        <p className='mt-5 font-bold'>Keamanan rumah terjaga oleh satpam dan dekat dari pemukiman
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="800" className='w-60 mx-3 flex flex-col items-center gap-7 text-center'>
                        <h3 className='text-[#006A71] text-7xl'><TbArrowFork /></h3>
                        <p className='mt-5 font-bold'>Akses jalur keluar masuk
                            bagus , terhindar macet
                            dekat dengan rumah sakit
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Fasilitas