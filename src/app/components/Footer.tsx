"use client"

import React from 'react'
import logo from '@/assets/logotranstv.png'
import fb from "@/assets/fb.png"
import tk from "@/assets/tk.png"
import twt from "@/assets/twt.png"
import ig from "@/assets/ig.png"
import yt from "@/assets/yt.png"
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        <div className="bg-[#00184F] text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* <!-- Logo dan Alamat --> */}
        <div className="flex-1 mb-8 md:mb-0">
            <Image src={logo} alt="TRANS TV Logo" className="mb-4" width={250} height={250}/>
            <p className="font-semibold">PT TELEVISI TRANSFORMASI INDONESIA</p>
            <p className="not-italic leading-relaxed font-thin">
                Gedung TRANSMEDIA</p>
                <p className="not-italic leading-relaxed font-thin">Jl. Kapten P. Tendean Kav 12-14 A</p>
                <p className="not-italic leading-relaxed font-thin">Mampang Prapatan, Jakarta Selatan 12790</p>
        </div>

        {/* <!-- Ikon Sosial Media --> */}
        <div className='flex-1'>
        <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
                <a href="#"><Image src={fb} alt="Facebook" className="w-8 h-8"/></a>
                <a href="#"><Image src={ig}alt="Instagram" className="w-8 h-8"/></a>
                <a href="#"><Image src={twt} alt="Twitter" className="w-8 h-8"/></a>
                <a href="#"><Image src={tk}alt="TikTok" className="w-8 h-8"/></a>
                <a href="#"><Image src={yt} alt="YouTube" className="w-8 h-8"/></a>
            </div>
        </div>

        {/* <!-- Link Footer --> */}
        <div className="flex-1">
            <ul>
                <li className="mb-2"><a href="#" className="hover:text-yellow-400">CORPORATE</a></li>
                <li className="mb-2"><a href="#" className="hover:text-yellow-400">KERJASAMA MULTIPLEKSING</a></li>
                <li className="mb-2"><a href="#" className="hover:text-yellow-400">PEDOMAN SIBER</a></li>
                <li className="mb-2"><a href="#" className="hover:text-yellow-400">CONTACT US</a></li>
            </ul>
        </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Footer