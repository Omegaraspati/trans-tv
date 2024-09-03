import React from 'react'
import Image from 'next/image'
import pem1 from '@/assets/pemilu1.jpeg'
import pem2 from '@/assets/pemilu2.jpeg'
import pem3 from '@/assets/pemilu3.jpeg'
import pem4 from '@/assets/pemilu4.jpeg'
import ban5 from '@/assets/banner5.jpg'


const KabarPemilu = () => {
    return (
        <div>
            <div className='bg-gray-300 pt-5 pb-10'>
                <h1 className='p-10 text-3xl text-black font-semibold'>INSERT LIVE</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 max-w-[1600px] mx-auto'>
                    <div>
                        <article className="group bg-gray-300">
                            <div className='realtive overflow-hidden bg-cover bg-no-repeat'>
                                <Image
                                    alt="insert1"
                                    src={pem1}
                                    className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="pl-4">
                                <a href="#">
                                    <p className="mt-2 pb-2 texline-clamp-3 text-lg  text-black group-hover:text-yellow-400">
                                        VIDEO: RK Sebut Warga Jakarta Diuntungkan Presiden-Gubernur Berkoalisi
                                    </p>
                                </a>
                            </div>
                        </article>
                    </div>

                    <div>
                        <article className="group bg-gray-300">
                            <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                                <Image
                                    alt=""
                                    src={pem2}
                                    className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="pl-4">
                                <a href="#">
                                    <p className="mt-2 pb-2 texline-clamp-3 text-lg  text-black group-hover:text-yellow-400">
                                        VIDEO: Pramono Temui Perwakilan Masyarakat Jakarta: Belanja Masalah
                                    </p>
                                </a>
                            </div>
                        </article>
                    </div>

                    <div>
                        <article className="group bg-gray-300">
                            <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                                <Image
                                    alt=""
                                    src={pem3}
                                    className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="pl-4">
                                <a href="#">
                                    <p className="mt-2 pb-2 texline-clamp-3 text-lg  text-black group-hover:text-yellow-400">
                                        VIDEO: Pramono Temui Perwakilan Masyarakat Jakarta: Belanja Masalah
                                    </p>
                                </a>
                            </div>
                        </article>
                    </div>

                    <div>
                        <article className="group bg-gray-300">
                            <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                                <Image
                                    alt=""
                                    src={pem4}
                                    className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="pl-4">
                                <a href="#">
                                    <p className="mt-2 pb-2 texline-clamp-3 text-lg  text-black group-hover:text-yellow-400">
                                        VIDEO: Ridwan Kamil: Terus Terang Zona Nyaman Saya di Jawa Barat
                                    </p>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <Image src={ban5} alt={'bannerbawah'} width={2000} height={1000} className='md:mx-auto md:pb-20 md:p-20 bg-white mx-auto p-5' />
        </div>
    )
}

export default KabarPemilu