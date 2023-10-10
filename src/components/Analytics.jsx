import React from 'react'
import Laptop from '../assets/informationbot.jpg'

const Analytics = () => {
    return (
        <div className='bg-white w-full py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop" />
                <div className='flex flex-col justify-center'>
                    <p className='text-green-500 font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, cumque architecto aliquid, ut, error quisquam veniam dolore non laboriosam quos quis impedit voluptatem hic voluptas aut sequi. Mollitia, aperiam adipisci?</p>
                    <button className='bg-black text-green-500 py-3 w-[200px] mx-auto md:mx-0 my-4 rounded-md font-medium'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics
