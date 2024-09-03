import React from 'react'
import Image from 'next/image'
import ins1 from '@/assets/insert1.jpeg'
import ins2 from '@/assets/insert2.jpeg'
import ins3 from '@/assets/insert3.jpeg'

const Insert = () => {
    return (
        <div className='bg-pink-950 pt-5 pb-10'>
            <h1 className='p-10 text-3xl font-semibold'>INSERT LIVE</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1600px] mx-auto '>
                <div>
                    <article className="group bg-pink-950">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt="insert1"
                                src={ins1}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className="pl-4">
                            <a href="#">
                                <p className="mt-2 pb-2 line-clamp-3 text-lg  text-white group-hover:text-yellow-400">
                                    Ayu Ting Ting Gagal Dinikahi Lettu Fardhana, 
                                    Ivan Gunawan: Jangan-jangan Ujungnya...
                                </p>
                            </a>
                        </div>
                    </article>
                </div>

                <div>
                <article className="group bg-pink-950">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={ins2}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className="pl-4">
                            <a href="#">
                                <p className="mt-2 pb-2 line-clamp-3 text-lg  text-white group-hover:text-yellow-400">
                                Verrell Beri Ibu Sambung Mobil Mewah, Ivan Fadila Khawatirkan Hal Ini
                                </p>
                            </a>
                        </div>
                    </article>
                </div>

                <div>
                <article className="group bg-pink-950">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={ins3}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className="pl-4">
                            <a href="#">
                                <p className="mt-2 pb-2 line-clamp-3 text-lg  text-white group-hover:text-yellow-400">
                                Geram Difitnah Nikah Siri dengan Ria Ricis, Atta Halilintar: Ngerinya Banyak yang...
                                </p>
                            </a>
                        </div>
                    </article>
                </div>


            </div>
        </div>
    )
}

export default Insert