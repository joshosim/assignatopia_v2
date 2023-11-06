import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Services = () => {
    const images = {
        pic1: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        pic2: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
    const getApi = async () => {
        const url = 'https://fakestoreapi.com/products';
        fetch(url)
            .then(res => res.json())
            .then(json => console.log(json))
    }
    getApi();
    //9584f3fb4b244968abad9c2cf049011d-key
    return (
        <div className='text-black relative'>
            <div className='pb-4  bg-[#EFD9CA] '>
                <h1 className='shadow-lg font-bold text-xs rounded-2xl px-2 py-1 bg-[#000300] text-[#EFD9CA] w-[80px] grid place-content-center absolute top-2 left-4 cursor-pointer'>Blogs</h1>
                <h1 className='shadow-lg font-bold text-xs rounded-2xl px-2 py-1 bg-[#0003007e] text-[#EFD9CA] w-[80px] grid place-content-center absolute top-2 right-10 cursor-pointer'>Services</h1>
                <div className=' py-4'>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='shadow-lg rounded-lg bg-white relative m-4'>
                        <div className='absolute top-4 right-4 flex flex-col gap-0 items-center'>
                            <FaHeart size={25} />
                            <p className='font-bold'>90</p>
                        </div>
                        <img src={images.pic2} alt="/" className='rounded-t-lg' />
                        <div className='p-2'>
                            <h1 className='font-bold px-2 text-xs md:text-xl'>The Champions are Back</h1>
                            <p className='px-2 text-xs md:text-xl'>Lorem ipsum dolor sit amet, co ...........</p>
                        </div>
                    </div>
                    <div className='shadow-lg mx-4 rounded-lg bg-white relative m-4'>
                        <div className='absolute top-4 right-4 flex flex-col gap-0 items-center'>
                            <FaHeart size={25} />
                            <p className='font-bold'>90</p>
                        </div>
                        <img src={images.pic2} alt="/" className='rounded-t-lg' />
                        <div className='p-2'>
                            <h1 className='font-bold px-2 text-xs md:text-xl'>The Champions are Back</h1>
                            <p className='px-2 text-xs md:text-xl'>Lorem ipsum dolor sit amet, co ...........</p>
                        </div>
                    </div>
                    <div className='shadow-lg mx-4 rounded-lg bg-white relative m-4'>
                        <div className='absolute top-4 right-4 flex flex-col gap-0 items-center'>
                            <FaHeart size={25} />
                            <p className='font-bold'>90</p>
                        </div>
                        <img src={images.pic2} alt="/" className='rounded-t-lg' />
                        <div className='p-2'>
                            <h1 className='font-bold px-2 text-xs md:text-xl'>The Champions are Back</h1>
                            <p className='px-2 text-xs md:text-xl'>Lorem ipsum dolor sit amet, co ...........</p>
                        </div>
                    </div>
                    <div className='shadow-lg mx-4 rounded-lg bg-white relative m-4'>
                        <div className='absolute top-4 right-4 flex flex-col gap-0 items-center'>
                            <FaHeart size={25} />
                            <p className='font-bold'>90</p>
                        </div>
                        <img src={images.pic2} alt="/" className='rounded-t-lg' />
                        <div className='p-2'>
                            <h1 className='font-bold px-2 text-xs md:text-xl'>The Champions are Back</h1>
                            <p className='px-2 text-xs md:text-xl'>Lorem ipsum dolor sit amet, co ...........</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services








