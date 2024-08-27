"use client"

import React from 'react'
import Image from 'next/image'
import tv1 from '@/assets/tv1.jpg'

const ProgramTv = () => {
    return (
        <div className="p-20  ">
            <div className="relative inline-block">
                <div className='relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
                <Image src={tv1} className="w-32 h-32 max-w-xs rounded-xl transition duration-300 ease-in-out hover:scale-110 " alt="Gambar Kotak"/>
                </div>
                <div className="absolute inset-0 bg-yellow-500 opacity-50 text-center flex items-center rounded-xl text-white font-medium text-opacity-95 cursor-pointer hover:opacity-65">
                </div>
                <Image src={tv1} className="w-16 h-16 rounded-full grayscale hover:grayscale-0 absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 " alt="Gambar Bulat" />
            </div>
        </div>
    )
}

export default ProgramTv