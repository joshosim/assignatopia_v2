import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'
import { FaRegWindowClose } from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const tapMenuBar = () => {
        setNav(!nav);
    }
    return (
        <div className='w-full p-4 text-white font-bold relative'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl hover:text-gray-200 cursor-pointer'>TJJC</h1>
                <ul className='md:flex justify-between gap-16 hidden'>
                    <Link to='/'>
                        <li className='hover:bg-green-500 hover:p-3 hover:text-gray-500 transition-all ease-in-out duration-500 cursor-pointer hover:rounded-md'>Home</li></Link>
                    <Link to='/about'>
                        <li className='hover:bg-green-500 hover:p-3 hover:text-gray-500 transition-all ease-in-out duration-500 cursor-pointer hover:rounded-md'>About</li></Link>
                    <Link to='/services'>
                        <li className='hover:bg-green-500 hover:p-3 hover:text-gray-500 transition-all ease-in-out duration-500 cursor-pointer hover:rounded-md'>Services</li></Link>
                    <Link to='/contact'>
                        <li className='hover:bg-green-500 hover:p-3 hover:text-gray-500 transition-all ease-in-out duration-500 cursor-pointer hover:rounded-md'>Contact</li></Link>
                </ul>
                <div className={nav ? 'bg-black flex flex-col gap-8 md:hidden w-full h-[200vh] absolute left-0 top-0 py-4 px-4 text-center' : 'hidden'}>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl hover:text-gray-200 cursor-pointer text-white'>TJJC</h1>
                        <div className='block md:hidden' onClick={tapMenuBar} >
                            <FaRegWindowClose size={25} /></div>
                    </div>
                    <ul className='flex flex-col gap-4'>
                        <Link to='/' >
                            <li className='py-4 hover:bg-green-500 hover:p-3 hover:text-gray-500 transition-all ease-in-out duration-500 cursor-pointer hover:rounded-md'>Home</li></Link>
                        <Link to='/about'>
                            <li className='py-4 hover:bg-green-500 hover:p-3 hover:text-gray-500 transition-all ease-in-out duration-500 cursor-pointer hover:rounded-md'>About</li></Link>
                        <Link to='/services' >
                            <li className='py-4 hover:bg-green-500 hover:p-3 hover:text-gray-500 transition-all ease-in-out duration-500 cursor-pointer hover:rounded-md'>Services</li></Link>
                        <Link to='/contact'>
                            <li className='py-4 hover:bg-green-500 hover:p-3 hover:text-gray-500 transition-all ease-in-out duration-500 cursor-pointer hover:rounded-md'>Contact</li></Link>
                    </ul>
                </div>
                <div className='block md:hidden' onClick={tapMenuBar} >
                    <AiOutlineMenu size={25} />
                </div>

            </div>
        </div>
    )
}

export default NavBar
