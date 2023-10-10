import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
                        <input className='p-3 rounded-md flex w-full text-black' type="email" placeholder='Enter Email' />
                        <button className='bg-green-500 text-black md:ml-4 py-3 px-6 w-[200px] mx-auto my-4 rounded-md font-medium'>Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-green-500'>Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
