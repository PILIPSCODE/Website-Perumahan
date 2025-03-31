"use client"
import Image from 'next/image'
import React from 'react'
import { FaMessage } from 'react-icons/fa6'

const Testimoni = () => {
    return (
        <div className='lg:h-screen flex flex-col justify-center font-medium max-lg:py-20  items-center gap-10'>
            <div className='text-[#006A71] my-10'>
                <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200" className='mx-auto mb-5 text-4xl'>
                    <h1 className='text-center'>KENYAMANAN CLIENT </h1>
                    <h1 className='text-center'>ADALAH PRIORITAS KAMI</h1>
                </div>
                <p data-aos="fade-up" data-aos-duration="4000" data-aos-delay="400" className='text-xl text-center w-11/12  md:w-8/12 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quibusdam neque velit commodi, cupiditate sed at laboriosam maxime officia labore asperiores iure magni blanditiis reiciendis perferendis aperiam? Quibusdam, assumenda neque dolorum, libero eum nostrum sunt, consectetur laudantium recusandae numquam ipsam!</p>
            </div>
            <div className='w-full'>
                <div className='lg:grid-cols-3 xl:grid-cols-4  gap-5 w-full grid md:grid-cols-2'>

                    {[...Array(4)].map((e, index) => (
                        <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay={`${index * 100 + 400}`} key={index} className='w-11/12 mx-auto h-48  text-center rounded-3xl p-4 flex flex-col justify-between border-black border'>
                            <h1 className='mt-5'>Perumahan Bagus, Rapi dan bersih</h1>
                            <div className='flex items-center gap-2'>
                                <Image src={'/img/profile-user.png'} width={70} height={70} alt='profile-user' />
                                <div>
                                    <h2 className='text-start ml-1.5'>Harno</h2>
                                    <h2>⭐⭐⭐⭐⭐</h2>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='flex justify-center mt-16 w-11/12 mx-auto'>
                    <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="800" className='border-gray-700 flex gap-2 max-w-96  w-full border rounded-full'>
                        <h1 className='text-2xl  p-3 bg-gray-300   border-gray-700 border rounded-full'><FaMessage className='mx-auto' /></h1>
                        <input type="text" className=' w-full h-12 bg-transparent outline-none' placeholder='Ketik Komentar' />
                    </div>
                    <button data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1000" className='border-gray-700 border rounded-full ml-6  text-2xl max-md:text-base max-md:px-8 px-20'>Kirim</button>
                </div>
            </div>
        </div >
    )
}

export default Testimoni