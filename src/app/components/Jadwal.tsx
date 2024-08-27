import Image from 'next/image'
import React from 'react'
import bannerbawah from '@/assets/bannerbawh.jpg'
import striming from '@/assets/striming.gif'

const Jadwal = () => {
    return (
        <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 lg:bg-clip-text animate-gradient'>
            <div className='flex'>
                <div className="w-[900px] h-auto mt-1 hidden md:block  " >
                    <Image src={striming} alt='video'  />
                </div>
                <div className='bg-violet-950/80 sm:w-[900px] w-[430px] mt-1'>
                    <h1 className='text-white text-3xl font-bold lg:flex p-4 justify-between'>SCHEDULE
                        <span><p className='font-thin'>Tue, 27 Aug&apos;24</p></span>
                    </h1>
                    <div className="h-[400px] overflow-y-scroll bg-pink-950 p-4">
                        <div className="overflow-x-auto">
                            <table className="sm:min-w-full  bg-pink-800/60 text-white text-sm">

                                <tbody className="uppercase">
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">01:00</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white ">CNN indonesia connected</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">05:00</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">islam itu indah</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">06:30</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">insert pagi</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">07:30</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">cnn indonesia good morning</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">08:30</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">pagi pagi ambyar</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">10:30</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">insert</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">12:30</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">brownis(obrolan manis)</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">14:00</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">rumpi(no secret)</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">15:00</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">insert today</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">16:00</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">cnn indonesia news update</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">16:30</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">dream box indonesia</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">17:30</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">bikin laper</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">18:45</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">insert story</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">20:00</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">dunia punya cerita</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">21:00</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">Bioskop transtv xxx:state of the union(a.k.a.xxx: the next level)</td>
                                    </tr>
                                    <tr className="odd:bg-pink-950">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">23:00</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-white">bioskop transtv the invicible dragon</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={bannerbawah} alt={'banner'} width={2000} height={1000} className='mx-auto pb-20' />
        </div>
    )
}

export default Jadwal