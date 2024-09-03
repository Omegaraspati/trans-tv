import React from 'react'
import ttv from '@/assets/ttv.png'
import t7 from '@/assets/t7.png'
import cnn from '@/assets/cnn.png'
import cnbc from '@/assets/cnbc.png'
import od from '@/assets/20d.png'
import insert from '@/assets/inst.png'
import Image from 'next/image'
import bannerbawah2 from '@/assets/bannerbawah2.jpg'

const Grid = () => {
    return (
        <div>

            <h1 className='pl-10 pb-5 text-3xl font-bold'>TRANSMEDIA LIVE TV</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[1600px] mx-auto">
                <div>
                    <Image className="h-auto max-w-full" src={ttv} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full" src={t7} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full" src={cnn} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full" src={cnbc} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full" src={insert} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full" src={od} alt="" />
                </div>
            </div>
            <div className='flex justify-center py-10'>
                <button type="button" className="py-3 inline-flex items-center gap-x-2 text-sm font-medium  border border-transparent
 bg-yellow-500 text-black hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 
 disabled:opacity-50 disabled:pointer-events-none px-10">
                    MORE
                </button>
            </div>
            <Image src={bannerbawah2} alt={'bannerbawah'} width={2000} height={1000} />
        </div>
    )
}

export default Grid