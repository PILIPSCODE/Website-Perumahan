"use client"
import React from 'react'
import { MdBedroomParent, MdLiving } from 'react-icons/md';
import { FaBath, FaRegBuilding } from 'react-icons/fa';
import { FaKitchenSet } from 'react-icons/fa6';
import { PiGarage } from 'react-icons/pi';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Footer from '@/Feature/HomePage/Footer';


interface Facility {
    icon: React.ElementType;
    text: string;
}

interface UnitProps {
    image: string;
    type: string;
    facilities: Facility[];
    slug: string;
}

// Data Unit Hunian
const unitData: UnitProps[] = [
    {
        image: '/img/unit-standart.png', type: 'Tipe Unit Standar', slug: "tipe-unit-standar", facilities: [
            { icon: MdBedroomParent, text: '2 Kamar' },
            { icon: FaBath, text: '2 Kamar Mandi' },
            { icon: PiGarage, text: '1 Garasi' },
            { icon: FaKitchenSet, text: '1 Dapur & Ruang Makan' },
            { icon: FaRegBuilding, text: '1 Lantai' },
            { icon: MdLiving, text: '1 Ruang Tamu' },
        ]
    },
    {
        image: '/img/unit-standart.png', type: 'Tipe Unit Premium', slug: "tipe-unit-premium", facilities: [
            { icon: MdBedroomParent, text: '3 Kamar' },
            { icon: FaBath, text: '3 Kamar Mandi' },
            { icon: PiGarage, text: '2 Garasi' },
            { icon: FaKitchenSet, text: '1 Dapur & Ruang Makan' },
            { icon: FaRegBuilding, text: '2 Lantai' },
            { icon: MdLiving, text: '1 Ruang Keluarga' },
        ]
    },
    {
        image: '/img/unit-standart.png', slug: "tipe-unit-mewah", type: 'Tipe Unit Mewah', facilities: [
            { icon: MdBedroomParent, text: '4 Kamar' },
            { icon: FaBath, text: '4 Kamar Mandi' },
            { icon: PiGarage, text: '2 Garasi' },
            { icon: FaKitchenSet, text: '2 Dapur & Ruang Makan' },
            { icon: FaRegBuilding, text: '3 Lantai' },
            { icon: MdLiving, text: '1 Ruang Santai' },
        ]
    },
];

const Page = () => {
    const params = useParams();
    const slug = params?.slug as string;

    // Filter the data
    const filteredUnits = unitData.filter((e) => e.slug === slug);

    if (filteredUnits.length === 0) return <div>Unit not found</div>;

    return (
        <div className='overflow-hidden'>
            <Navbar />
            {filteredUnits.map((e, index) => (
                <div key={index}>
                    <div className='h-screen relative'>
                        <Image src={e.image} className='object-cover' alt='' fill />
                        <div className='h-full absolute text-white flex flex-col justify-center items-center w-full bg-black/30'>
                            <h2 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200" className='xl:text-8xl md:text-6xl text-4xl  text-center font-medium uppercase'>{e.type.slice(0, 9)}</h2>
                            <h1 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="400" className='xl:text-9xl md:text-7xl text-5xl text-center font-medium uppercase'>{e.type.slice(9)}</h1>
                        </div>
                    </div>
                    <div className='h-screen flex max-lg:flex-col'>
                        <div className='w-96 p-5'>
                            <h1 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200" className='text-[#006A71] xl:text-6xl md:text-4xl text-2xl mt-14 text-center uppercase'>{e.type}</h1>
                            <div className='text-xl p-10'>
                                {e.facilities.map((facility, index) => (
                                    <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay={`${index * 100 + 200}`} key={index} className="flex gap-3 my-7 items-center">
                                        <facility.icon />
                                        <p>{facility.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="4000" data-aos-delay="800" className='flex-grow relative'>
                            <Image src={e.image} alt='' fill className='object-cover brightness-200' />
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="4000" data-aos-delay="200" className='lg:h-screen h-60 relative w-full'>
                        <Image src="/img/fasilitas.png" className='object-contai' alt='' fill />
                    </div>
                    <div className='py-40 text-[#006A71]'>
                        <h1 data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200" className='font-bold text-center xl:text-6xl my-5  md:text-4xl text-2xl'>DENAH RUMAH</h1>
                        <Image data-aos="zoom-in" data-aos-duration="4000" data-aos-delay="400" src={"https://arsitagx-master-article.s3-ap-southeast-1.amazonaws.com/article-photo/199/cover.jpeg"} alt='' width={900} height={900} className='brightness-50 mx-auto' />

                    </div>
                </div>
            ))}
            <Footer />
        </div>
    )
}

export default Page;
