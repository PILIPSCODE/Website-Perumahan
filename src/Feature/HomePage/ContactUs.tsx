"use client"
import React from 'react'

export const ContactUs = () => {
    return (
        <section id='kontak-kami' className='bg-[#006A71]  text-white xl:h-screen flex max-xl:flex-col p-10 items-center justify-center lg:gap-6 gap-10 '>
            <div className='font-medium lg:w-1/2'>
                <h1 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="0" className='lg:text-5xl lg:ml-20 mb-14 text-3xl'>Kontak Kami</h1>
                <div className='flex lg:text-3xl text-xl gap-20'>
                    <div className='flex flex-col gap-2'>
                        <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200" >Email</h3>
                        <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="400" >No Wa</h3>
                        <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="600">Instagram</h3>
                        <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="800">Facebook</h3>
                        <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1000">Lokasi</h3>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200" >Dummy@gmail.com</h3>
                        <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="400" >+62827828709</h3>
                        <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="600">@Nexora</h3>
                        <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="800">@Nexora</h3>
                        <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1000">Surakarta , Gumpang , Jln</h3>
                        <h3 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1000"> Slamet Riyadi No 14 , Jawa Tengah</h3>
                    </div>
                </div>
            </div>
            <iframe data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1200" className="rounded-3xl max-lg:w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31641.148172244702!2d110.727249309457!3d-7.559326067079585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14c015353887%3A0x9aae629b34e85880!2sKec.%20Kartasura%2C%20Kabupaten%20Sukoharjo%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1743317491841!5m2!1sid!2sid" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}
