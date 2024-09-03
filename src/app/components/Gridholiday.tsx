import React from 'react'
import Image from 'next/image'
import gridholiday1 from '@/assets/gridholiday1.jpg'
import gridholiday2 from '@/assets/gridholiday2.jpg'
import gridholiday3 from '@/assets/gridholiday3.jpg'
import gridholiday4 from '@/assets/gridholiday4.jpg'

const Gridholiday = () => {
    return (
        <div className='pb-10'>
            <h1 className='pl-10 pt-10 text-3xl font-bold'>WISATA HIBURAN</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 max-w-[1600px] mx-auto  '>
                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={gridholiday1}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                    
                        <div className="pl-4">

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-white">
                            Wisata di Selandia Baru, Menguji Adrenalin di Hamparan Keindahan
                            </p>
                        </div>
                    </article>
                </div>
                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={gridholiday2}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                    
                        <div className="pl-4">

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-white">
                            Begini Cara Mencuci Ransel agar Tetap Resik dan Tak Lekas Rusak
                            </p>
                        </div>
                    </article>
                </div>
                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={gridholiday3}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                    
                        <div className="pl-4">

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-white">
                            Benarkah Suku Dayak Iban adalah Manusia Tertua di Pulau Kalimantan?
                            </p>
                        </div>
                    </article>
                </div>
                <div>
                    <article className="group bg-black">
                        <div className='realtive overflow-hidden bg-cover bg-no-repeat  '>
                            <Image
                                alt=""
                                src={gridholiday4}
                                className="h-auto w-full object-cover inset-0 shadow-xl transition duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                    
                        <div className="pl-4">

                            <p className="mt-2 pb-2 line-clamp-3 text-lg  text-white">
                            Wisata Kuliner di Tulungagung Melengkapi Keindahan Alam dan Budaya
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Gridholiday