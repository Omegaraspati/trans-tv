'use client'

import React from 'react'
import banner1 from '@/assets/banner1.png'
import banner2 from '@/assets/banner2.png'
import banner3 from '@/assets/banner3.png'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'

const Carousel = () => {
  return (
    <div>
        {/* <!-- Slider --> */}
<div data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }' className="relative">
  <div className="hs-carousel relative overflow-hidden w-full min-h-[150px] sm:min-h-[600px] bg-white rounded-lg">
    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-700">  
          <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
            <Image src={banner1} alt={'banner1'}/>
            </span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
        <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
            <Image src={banner2} alt={'banner2'}/>
            </span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
        <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
            <Image src={banner3} alt={'banner3'}/>
            </span>
        </div>
      </div>
    </div>
  </div>

  <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </span>
    <span className="sr-only">Previous</span>
  </button>
  <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
    <span className="sr-only">Next</span>
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </span>
  </button>
</div>
{/* <!-- End Slider --> */}
<div className='bg-gray-300 p-1 lg:p-1 lg:border-t lg:border-b"'>
    <h1 className='text-center bg-white text-black text-xs sm:text-sm lg:flex lg:justify-center'>
    <span><FaSearch/></span>Situs ini menggunakan link niat iklan Google AdSense. AdSense membuat link ini secara otomatis sehingga dapat membantu kreator mendapatkan penghasilan.
    </h1>
</div>
    </div>

  )
}

export default Carousel