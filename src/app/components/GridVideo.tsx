import Image from 'next/image'
import React from 'react'
import grid1 from '@/assets/grid1.jpg'
import grid2 from '@/assets/grid2.jpg'
import iconplay from '@/assets/iconplay.png'
import grid3 from '@/assets/grid4.jpg'
import grid4 from '@/assets/grid3.jpg'
import grid5 from '@/assets/grid5.jpg'
import grid6 from '@/assets/grid6.jpg'

const GridVideo = () => {
    return (
        <div className='bg-slate-700'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1600px] mx-auto  '>
                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={grid1}
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
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Favorite comedy</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-gray-500">
                                SKETSA: Daftar Sayur yang Harus Dibeli
                            </p>
                        </div>
                    </article>
                </div>

                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={grid2}
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
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">masak masak</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg/2  text-gray-500">
                                Sambal Iga Belimbing Wuluh, Asam-asam Pedas yang Menggoda
                            </p>
                        </div>
                    </article>
                </div>

                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={grid3}
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
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Biokop TransTv</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-gray-500">
                                CELL
                            </p>
                        </div>
                    </article>
                </div>

                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={grid4}
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
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Biokop TransTv</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-gray-500">
                                2012
                            </p>
                        </div>
                    </article>
                </div>
                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={grid5}
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
                                <h3 className="text-sm font-medium text-yellow-500 uppercase">Cerita di Balik Hijab</h3>
                            </a>

                            <p className="mt-2 pb-2 line-clamp-3 text-ms/2  text-gray-500">
                                Dukungan Roger Danuarta Mantapkan Cut Meyriska untuk Berhijrah
                            </p>
                        </div>
                    </article>
                </div>
                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={grid6}
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
                                NILAI KEHIDUPAN: Belajar Menerima Kenyataan
                            </p>
                        </div>
                    </article>
                </div>

            </div>
            <div className='flex justify-center py-10'>
                <button type="button" className="py-3 inline-flex items-center gap-x-2 text-sm font-medium  border border-transparent
 bg-yellow-500 text-black hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 
 disabled:opacity-50 disabled:pointer-events-none px-10">
                    MORE
                </button>
            </div>
        </div>
    )
}

export default GridVideo