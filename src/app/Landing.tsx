"use client"
import Navbar from '@/components/Navbar'
import AboutUs from '@/Feature/HomePage/AboutUs'
import Fasilitas from '@/Feature/HomePage/Fasilitas'
import Galery from '@/Feature/HomePage/Galery'
import Hero from '@/Feature/HomePage/Hero'
import UnitRumah from '@/Feature/HomePage/UnitRumah'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimoni from '@/Feature/HomePage/Testimoni'
import { ContactUs } from '@/Feature/HomePage/ContactUs'
import Footer from '@/Feature/HomePage/Footer'

const Landing = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (
        <div className='relative'>
            <Navbar />
            <Hero />
            <AboutUs />
            <UnitRumah />
            <Fasilitas />
            <Galery />
            <Testimoni />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Landing