"use client"
import Image from 'next/image';
import React from 'react';
import { MdBedroomParent, MdLiving } from 'react-icons/md';
import { FaBath, FaRegBuilding } from 'react-icons/fa';
import { FaKitchenSet } from 'react-icons/fa6';
import { PiGarage } from 'react-icons/pi';
import { HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';


// Interface untuk fasilitas
interface Facility {
    icon: React.ElementType;
    text: string;
}

// Interface untuk Unit Rumah
interface UnitProps {
    image: string;
    type: string;
    facilities: Facility[];
    slug: string;
}

// Data Unit Hunian
const unitData: UnitProps[] = [
    {
        image: '/img/unit1.png',
        type: 'Tipe Unit Standar',
        slug: "tipe-unit-standar",
        facilities: [
            { icon: MdBedroomParent, text: '2 Kamar' },
            { icon: FaBath, text: '2 Kamar Mandi' },
            { icon: PiGarage, text: '1 Garasi' },
            { icon: FaKitchenSet, text: '1 Dapur & Ruang Makan' },
            { icon: FaRegBuilding, text: '1 Lantai' },
            { icon: MdLiving, text: '1 Ruang Tamu' },
        ],
    },
    {
        image: '/img/unit2.png',
        type: 'Tipe Unit Premium',
        slug: "tipe-unit-premium",
        facilities: [
            { icon: MdBedroomParent, text: '3 Kamar' },
            { icon: FaBath, text: '3 Kamar Mandi' },
            { icon: PiGarage, text: '2 Garasi' },
            { icon: FaKitchenSet, text: '1 Dapur & Ruang Makan' },
            { icon: FaRegBuilding, text: '2 Lantai' },
            { icon: MdLiving, text: '1 Ruang Keluarga' },
        ],
    },
    {
        image: '/img/unit3.png',
        slug: "tipe-unit-mewah",
        type: 'Tipe Unit Mewah',
        facilities: [
            { icon: MdBedroomParent, text: '4 Kamar' },
            { icon: FaBath, text: '4 Kamar Mandi' },
            { icon: PiGarage, text: '2 Garasi' },
            { icon: FaKitchenSet, text: '2 Dapur & Ruang Makan' },
            { icon: FaRegBuilding, text: '3 Lantai' },
            { icon: MdLiving, text: '1 Ruang Santai' },
        ],
    },
];

// Komponen Unit Detail
const UnitDetail: React.FC<Facility> = ({ icon: Icon, text }) => (
    <div className="flex gap-3 items-center">
        <Icon className="text-xl" />
        <p>{text}</p>
    </div>
);

// Komponen Unit Card
const UnitCard: React.FC<UnitProps> = ({ image, type, facilities, slug, ...props }) => (
    <div {...props} className="bg-white  rounded-2xl overflow-hidden relative  w-full">
        {/* Gambar Utama */}
        <div className="relative z-0 lg:h-96 h-72 w-full">
            <Image src={image} className="relative z-0 object-cover " alt={type} fill />
        </div>

        {/* Detail Unit */}
        <div className="w-full relative z-10">
            <div className="  bottom-0 p-2  bg-white">
                <div className='absolute h-16 w-full -top-10 flex left-0'>
                    <h2 className="xl:text-3xl text-xl flex-grow   bg-white px-3  py-3 font-medium text-[#006A71]">{type}</h2>
                    <div className='w-1/3 h-full relative -z-0 '>
                        <Image
                            src={'/img/card-rounded.png'}
                            fill
                            alt="rounded"
                        />
                    </div>
                </div>
                <div className='w-full font-medium max-md:flex-col max-md:items-end flex items-center justify-around'>
                    <div className="flex text-[10px] relative md:w-7/12  z-0 gap-4  mt-5 flex-wrap">
                        {facilities.map((facility, index) => (
                            <UnitDetail key={index} {...facility} />
                        ))}
                    </div>
                    <div className='text-6xl'>
                        <Link href={`/unit/${slug}`}>
                            <HiArrowLongRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Komponen Utama
const UnitRumah: React.FC = () => {
    return (
        <section id="unit-rumah" className=" bg-[#006A71] px-10 py-20">
            <h1 className="text-6xl text-white font-bold">Tipe Hunian</h1>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-14    mt-20">
                {unitData.map((unit, index) => (
                    <UnitCard data-aos="fade-up" data-aos-duration="4000" data-aos-delay={`${index * 200}`} key={index} {...unit} />
                ))}
            </div>
        </section>
    );
};

export default UnitRumah;
