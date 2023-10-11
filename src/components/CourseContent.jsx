import React from 'react'
import { AiOutlineGlobal, AiOutlineLaptop } from 'react-icons/ai'
import { data } from '../api/data'

const CourseContent = () => {
    return (
        <div className='bg-white w-full p-8'>
            <p className='text-xl font-bold text-center'>Courses</p>
            <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
                {
                    data.map((data) => (
                        <div className='shadow-xl rounded-xl p-1 mt-8 hover:scale-105 duration-300 flex flex-col justify-between'>
                            <div className='w-full h-40'><img className='object-cover w-full h-40' src={data.imagelink} alt="/" /></div>
                            <p className='font-medium px-2'>{data.title}</p>
                            <p className='font-medium px-2'>Price: <span className='line-through'>N{data.price1}</span> <span className='ml-2'>N{data.price2}</span></p>
                            <div className='flex items-center justify-center my-2 '>
                                <div className='flex items-center'><AiOutlineGlobal size={20} /><p>English</p></div>
                                <span className='mx-2'>|</span>
                                <div className='flex items-center'><AiOutlineLaptop size={20}></AiOutlineLaptop><p>{data.category}</p></div>
                            </div>
                            <a href='https://wa.link/obolwk'><button className='w-full bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl py-2 '>Get this Course</button></a>
                        </div>
                    )
                    )
                }

            </div>
        </div>
    )
}

export default CourseContent
