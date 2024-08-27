"use client"

import Image from 'next/image'
import React from 'react'
import logotranstv from '@/assets/logotranstv.png'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
        <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-3 bg-black">
      <nav className="lg:max-w-[1600px] lg:w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
    <div className="flex items-center justify-between">
      <a className="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
        <Image src={logotranstv} alt={'logotranstv'} width={250} height={250} className=''/>
      </a>
      <div className="sm:hidden">
        <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
          <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
    </div>
    <div id="hs-navbar-example" className="hidden uppercase hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
      <div className="flex flex-col gap-6 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
        <a className=" text-blue-500 focus:outline-none text-lg font-extrabold" href="#" aria-current="page">home</a>
        <a className="text-xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient " href="#">live</a>
        <a className="font-semibold text-white hover:text-blue-500 " href="#">video</a>
        <a className="font-semibold text-white hover:text-blue-500 " href="#">program</a>
        <a className="font-semibold text-white hover:text-blue-500 " href="#">schedule</a>
        <a className="font-semibold text-white hover:text-blue-500 " href="#">career</a>
        <a className="font-semibold text-white hover:text-blue-500 " href="#">corporate</a>
        <a className="font-semibold text-white hover:text-blue-500 " href="#">contact us</a>
        <a className="font-semibold text-white hover:text-blue-500 " href="#">sign in</a>  
        <FaSearch className='text-white text-xl cursor-pointer hover:text-blue-500'/>   
        </div>
    </div>
  </nav>
</header>
    </div>
  )
}

export default Navbar