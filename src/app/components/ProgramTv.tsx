"use client"

import React from 'react'
import Image from 'next/image'
import tv1 from '@/assets/tv1.jpg'
import tv2 from '@/assets/tv2.jpg'
import tv3 from '@/assets/tv3.jpg'
import tv4 from '@/assets/tv4.jpg'
import tv5 from '@/assets/tv5.jpg'
import tv6 from '@/assets/tv6.jpg'
import banner4 from '@/assets/banner4.jpg'

const ProgramTv = () => {
    return (
        <div>
        <div className="sm:p-20 sm:space-x-4 mt-20 pb-15 grid grid-cols-2 md:grid-cols-6 " >
        <div className="relative inline-block group">
          
            <div className='relative max-w-xs overflow-hidden bg-cover bg-no-repeat group'>
     
                <Image 
                    src={tv1} 
                    className="w-60 h-60 max-w-xs inset-0 rounded-3xl opacity-665 transition duration-300 ease-in-out group-hover:scale-110 hover:rounded-3xl" 
                    alt="Gambar Kotak" 
                />
            </div>
            
            <div className="absolute inset-0 text-center bg-yellow-600 bg-opacity-70 flex items-center rounded-3xl text-white font-medium text-opacity-100 cursor-pointer group-hover:bg-opacity-55 hover:rounded-md">
            <h1 className='font-thin text-4xl opacity-100 group-hover:font-bold group'>FAVORITE REALITY SHOW</h1>
            </div>
           
            <Image 
                src={tv1} 
                className="w-[7.5rem] h-[7.5rem] rounded-full grayscale transition duration-300 ease-in-out group-hover:grayscale-0 absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2" 
                alt="Gambar Bulat" 
            />
        
        </div>

        <div className="relative inline-block group">
          
            <div className='relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
     
                <Image 
                    src={tv2} 
                    className="w-60 h-60 max-w-xs inset-0 rounded-3xl opacity-50 transition duration-300 ease-in-out group-hover:scale-110 hover:rounded-3xl" 
                    alt="Gambar Kotak" 
                />
            </div>
            
            <div className="absolute inset-0 text-center bg-green-600 bg-opacity-70 flex items-center rounded-3xl text-white font-medium text-opacity-100 cursor-pointer group-hover:bg-opacity-55 hover:rounded-md">
            <h1 className='font-thin text-4xl opacity-100 group-hover:font-bold'>FAVORITE TV PROGRAM</h1>
            </div>
           
            <Image 
                src={tv2} 
                className="w-[7.5rem] h-[7.5rem] rounded-full grayscale transition duration-300 ease-in-out group-hover:grayscale-0 absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2" 
                alt="Gambar Bulat" 
            />
        
        </div>

        <div className="relative inline-block group">
          
            <div className='relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
     
                <Image 
                    src={tv3} 
                    className="w-60 h-60 max-w-xs inset-0 rounded-3xl opacity-50 transition duration-300 ease-in-out group-hover:scale-110 hover:rounded-3xl" 
                    alt="Gambar Kotak" 
                />
            </div>
            
            <div className="absolute inset-0 text-center bg-blue-300 bg-opacity-70 flex items-center rounded-3xl text-white font-medium text-opacity-100 cursor-pointer group-hover:bg-opacity-55 hover:rounded-md">
            <h1 className='font-thin text-4xl opacity-100 group-hover:font-bold'>FAVORITE COMEDY</h1>
            </div>
           
            <Image 
                src={tv3} 
                className="w-[7.5rem] h-[7.5rem] rounded-full grayscale transition duration-300 ease-in-out group-hover:grayscale-0 absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2" 
                alt="Gambar Bulat" 
            />
        
        </div>
        <div className="relative inline-block group">
          
            <div className='relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
     
                <Image 
                    src={tv4} 
                    className="w-60 h-60 max-w-xs inset-0 rounded-3xl opacity-50 transition duration-300 ease-in-out group-hover:scale-110 hover:rounded-3xl" 
                    alt="Gambar Kotak" 
                />
            </div>
            
            <div className="absolute inset-0 text-center bg-violet-700 bg-opacity-70 flex items-center rounded-3xl text-white font-medium text-opacity-100 cursor-pointer group-hover:bg-opacity-55 hover:rounded-md">
            <h1 className='font-thin text-4xl opacity-100 group-hover:font-bold'>FAVORITE DRAMA</h1>
            </div>
           
            <Image 
                src={tv4} 
                className="w-[7.5rem] h-[7.5rem] rounded-full grayscale transition duration-300 ease-in-out group-hover:grayscale-0 absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2" 
                alt="Gambar Bulat" 
            />
        
        </div>
        <div className="relative inline-block group">
          
            <div className='relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
     
                <Image 
                    src={tv5} 
                    className="w-60 h-60 max-w-xs inset-0 rounded-3xl opacity-50 transition duration-300 ease-in-out group-hover:scale-110 hover:rounded-3xl" 
                    alt="Gambar Kotak" 
                />
            </div>
            
            <div className="absolute inset-0 text-center bg-purple-400 bg-opacity-70 flex items-center rounded-3xl text-white font-medium text-opacity-100 cursor-pointer group-hover:bg-opacity-55 hover:rounded-md">
            <h1 className='font-thin text-4xl opacity-100 group-hover:font-bold'>FAVORITE REALITY DRAMA</h1>
            </div>
           
            <Image 
                src={tv5} 
                className="w-[7.5rem] h-[7.5rem] rounded-full grayscale transition duration-300 ease-in-out group-hover:grayscale-0 absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2" 
                alt="Gambar Bulat" 
            />
        
        </div>
        <div className="relative inline-block group">
          
            <div className='relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
     
                <Image 
                    src={tv6} 
                    className="w-60 h-60 max-w-xs inset-0 rounded-3xl opacity-50 transition duration-300 ease-in-out group-hover:scale-110 hover:rounded-3xl" 
                    alt="Gambar Kotak" 
                />
            </div>
            
            <div className="absolute inset-0 text-center bg-pink-500 bg-opacity-70 flex items-center rounded-3xl text-white font-medium text-opacity-100 cursor-pointer group-hover:bg-opacity-55 hover:rounded-md">
            <h1 className='font-thin text-4xl opacity-100 group-hover:font-bold'>FAVORITE CULINARY</h1>
            </div>
           
            <Image 
                src={tv6} 
                className="w-[7.5rem] h-[7.5rem] rounded-full grayscale transition duration-300 ease-in-out group-hover:grayscale-0 absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2" 
                alt="Gambar Bulat" 
            />
        
        </div>
        
    </div>
        <Image src={banner4} alt={'banner'} width={2000} height={1000} className='md:mx-auto md:pb-20 md:p-20 bg-slate-700 mx-auto p-5' />
    </div>
    
    )
}

export default ProgramTv