"use client"

import React from 'react'
import Image from 'next/image'
import fdrama1 from '@/assets/fdrama1.jpg'
import fdrama2 from '@/assets/fdrama2.jpg'
import fdrama3 from '@/assets/fdrama3.jpg'
import iconplay from '@/assets/iconplay.png'
import ftv1 from '@/assets/ftv1.jpg'
import ftv2 from '@/assets/ftv2.jpg'
import ftv3 from '@/assets/ftv3.jpg'
import frd1 from '@/assets/frd1.jpg'
import frd2 from '@/assets/frd2.jpg'
import frd3 from '@/assets/frd3.jpg'

const FavoriteDrama = () => {
  return (
    <div>
         <div className='bg-white'>
         <h1 className='p-10 text-3xl text-black font-semibold'>FAVORITE DRAMA</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1600px] mx-auto pb-10   '>
                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={fdrama1}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        <Image
                            src={iconplay}
                            alt='icon'
                            className="hidden-on-mobile relative inline-block top-0 right-0 transform translate-x-96 -translate-y-1/3"
/>

                        <div className="pl-4">
                            <a href="#">
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Favorite Drama</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-gray-500">
                                Kisah Idul Fitri : Episode 17
                            </p>
                        </div>
                    </article>
                </div>

                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={fdrama2}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        <Image
                            src={iconplay}
                            alt='icon'
                            className="hidden-on-mobile relative inline-block top-0 right-0 transform translate-x-96 -translate-y-1/3"
/>

                        <div className="pl-4">
                            <a href="#">
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Favorite Drama</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg/2  text-gray-500">
                                Nilai Kehidupan : Taubat Semuslim
                            </p>
                        </div>
                    </article>
                </div>

                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={fdrama3}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        <Image
                            src={iconplay}
                            alt='icon'
                            className="hidden-on-mobile relative inline-block top-0 right-0 transform translate-x-96 -translate-y-1/3"
/>

                        <div className="pl-4">
                            <a href="#">
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Favorite Drama</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-gray-500">
                                LOVEPEDIA : He is Beautiful?
                            </p>
                        </div>
                    </article>
                </div>

                

            </div>
    </div>
    <div className='bg-white'>
         <h1 className='p-10 text-3xl text-black font-semibold'>FAVORITE TV PROGRAM</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1600px] mx-auto pb-10   '>
                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={ftv1}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        <Image
                            src={iconplay}
                            alt='icon'
                            className="hidden-on-mobile relative inline-block top-0 right-0 transform translate-x-96 -translate-y-1/3"
/>

                        <div className="pl-4">
                            <a href="#">
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Favorite TV Show</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-gray-500">
                                Dr OZ : Olahan Melon Rendah Kalori ala Korea
                            </p>
                        </div>
                    </article>
                </div>

                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={ftv2}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        <Image
                            src={iconplay}
                            alt='icon'
                            className="hidden-on-mobile relative inline-block top-0 right-0 transform translate-x-96 -translate-y-1/3"
/>

                        <div className="pl-4">
                            <a href="#">
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Favorite TV Program</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg/2  text-gray-500">
                                COMEDY TRAVELLER : Wisata Malam Thailand Meriah Banget!
                            </p>
                        </div>
                    </article>
                </div>

                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={ftv3}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        <Image
                            src={iconplay}
                            alt='icon'
                            className="hidden-on-mobile relative inline-block top-0 right-0 transform translate-x-96 -translate-y-1/3"
/>

                        <div className="pl-4">
                            <a href="#">
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Favorite TV Program</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-gray-500">
                                Girls Diary : Memanjangkan Lidah di Hotel Romantis
                            </p>
                        </div>
                    </article>
                </div>

                

            </div>
    </div>

    <div className='bg-white'>
         <h1 className='p-10 text-3xl text-black font-semibold'>FAVORITE REALITY DRAMA</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1600px] mx-auto pb-10   '>
                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={frd1}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        <Image
                            src={iconplay}
                            alt='icon'
                            className="hidden-on-mobile relative inline-block top-0 right-0 transform translate-x-96 -translate-y-1/3"
/>

                        <div className="pl-4">
                            <a href="#">
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Favorite Reality Drama</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-gray-500">
                                HARTA TAHTA WANITA : Misteri Kematian Pesiden
                            </p>
                        </div>
                    </article>
                </div>

                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={frd2}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        <Image
                            src={iconplay}
                            alt='icon'
                            className="hidden-on-mobile relative inline-block top-0 right-0 transform translate-x-96 -translate-y-1/3"
/>

                        <div className="pl-4">
                            <a href="#">
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Favorite Reality Drama</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg/2  text-gray-500">
                                HARTA TAHTA WANITA : Malam Sunyi yang Terkoyak
                            </p>
                        </div>
                    </article>
                </div>

                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={frd3}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        <Image
                            src={iconplay}
                            alt='icon'
                            className="hidden-on-mobile relative inline-block top-0 right-0 transform translate-x-96 -translate-y-1/3"
/>

                        <div className="pl-4">
                            <a href="#">
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Favorite Reality Drama</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-gray-500">
                                HARTA TAHTA WANITA : Saudara Membawa Maut
                            </p>
                        </div>
                    </article>
                </div>

                

            </div>
    </div>
    </div>
  )
}

export default FavoriteDrama