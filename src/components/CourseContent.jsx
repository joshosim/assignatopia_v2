import React from 'react'
import { AiOutlineSearch, AiOutlineGlobal, AiOutlineLaptop } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { data } from '../api/data'



const CourseContent = () => {
    const getApi = async () => {
        const url = 'https://fakestoreapi.com/products';
        fetch(url)
            .then(res => res.json())
            .then(json => console.log(json))
    }
    getApi();
    return (
        <div className='bg-white w-full p-8'>
            <div className='flex md:justify-between flex-col md:flex-row items-center'>
                <p className='text-xl font-bold'>Course</p>
                <div className='flex justify-between gap-1 bg-gray-500 rounded-md p-1 w-[75%]  m-3'>
                    <input type="text" placeholder='Search...' className='px-2 py-2 outline-none w-full rounded-md placeholder:italic' />
                    <div className='text-white bg-green-500 rounded-md py-2 px-3 font-bold hover:bg-green-600 hover:scale-105'><AiOutlineSearch size={25} /></div>
                </div>
            </div>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {

                    data.map(item => {
                        return (
                            <div key={item.id} className='shadow-xl rounded-xl p-1 mt-8 hover:scale-105 duration-300 flex flex-col justify-between'>
                                <div className='w-full h-40'><img className='object-cover w-full h-40' src={item.imagelink} alt="/" /></div>
                                <p className=' px-2 font-semibold'>{item.title}</p>
                                <p className='font-medium px-2'>Price: <span className='line-through'>N{item.price1}</span> <span className='ml-2'>N{item.price2}</span></p>
                                <div className='flex items-center justify-center my-2 '>
                                    <div className='flex items-center'><AiOutlineGlobal size={20} /><p>English</p></div>
                                    <span className='mx-2'>|</span>
                                    <div className='flex items-center'><AiOutlineLaptop size={20}></AiOutlineLaptop><p>{item.category}</p></div>
                                </div>
                                {/* 'https://wa.link/obolwk' */}
                                <Link to={`/courseinformation/${item.id}`} state={{ fromHome: { data } }}>
                                    <button className='w-full bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl py-2 '>Get this Course</button></Link>
                            </div>
                        )
                    })
                }

            </div>
        </div >
    )

}

export default CourseContent
