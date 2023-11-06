import React from 'react'
import { RiHeart3Fill } from 'react-icons/ri'
import { newData } from '../api/sample'

const Services = () => {
    const newApiData = newData;
    //9584f3fb4b244968abad9c2cf049011d-key
    return (
        <div className='text-black relative'>
            <div className='pb-4  bg-[#EFD9CA] '>
                <h1 className='shadow-lg font-bold text-xs rounded-2xl px-2 py-1 bg-[#000300] text-[#EFD9CA] w-[80px] grid place-content-center absolute top-2 left-4 cursor-pointer'>News</h1>
                <div className=' py-4'>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {
                        newApiData.map(items => {
                            return (
                                <div className='shadow-lg rounded-lg bg-white relative m-4'>
                                    <div className='absolute top-4 right-4 flex flex-col gap-0 items-center'>
                                        <RiHeart3Fill size={30} className='text-red-500 shadow-xl' />
                                        <p className='font-bold'>90</p>
                                    </div>
                                    <img src={items.urlToImage} alt="/" className='rounded-t-lg w-full h-40 md:h-80 object-cover' />
                                    <div className='p-2'>
                                        <h1 className='font-bold px-2 text-[1rem] md:text-xl'>{items.title}</h1>

                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services








