import React from 'react'
//import { AiOutlineSearch } from 'react-icons/ai'

const Course = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center px-8 py-16 relative'>
            <div className='text-white px-4'>
                <h1 className='text-4xl font-bold md:text-8xl text-green-500 md:text-left mb-4'>TJJC Online Courses</h1>
                <p className='text-[1rem] md:text-2xl font-medium mb-6'>TeamJoJoCode is an Online Educational site where you can gain access to materials that aid learning and upgrading of your skills.</p>
                <p className='text-[1rem] md:text-2xl font-medium mb-6'>TeamJoJoCode has made it easier for persons to gain access to these information at a lower cost rate. This is a great opportunity to harness and take advantage of these skills as the world is evolving and gearing towards tech!</p>
            </div>
            {/* Search Bar */}
            {/* <div className='absolute top-0 right-0 bg-white flex justify-between  rounded-md p-1 w-1/2 md:w-1/4 m-3'>
                <input type="text" placeholder='Search' className='px-2 py-2 outline-none w-full placeholder:italic' />
                <div className='text-white bg-green-500 rounded-md py-2 px-3 font-bold hover:bg-green-600 hover:scale-105'><AiOutlineSearch size={25} /></div>
            </div> */}
        </div>
    )
}

export default Course
