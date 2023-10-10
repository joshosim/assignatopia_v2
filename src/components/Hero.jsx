import React from 'react'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] mx-auto w-full h-screen text-center flex flex-col justify-center'>
                <p className='text-green-500 font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexing financing for</p>
                    {/* <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-slate-300' strings={['BTB', 'BTC', 'SASS']} typeSpeed={100} backSpeed={120} loop /> */}
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTC, BTB, & SASS platforms.</p>
                <button className='bg-green-500 rounded-md w-[200px] mx-auto my-4 py-3 font-medium text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero
