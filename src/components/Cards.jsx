import React from 'react'
import Single from '../assets/man.png'
import Double_Triple from '../assets/about.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="single" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-4xl text-center font-bold'>$149.99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b'>1 Granted User</p>
                        <p className='py-2 border-b'>4 GB RAM</p>
                    </div>
                    <button className='bg-green-500 mx-auto font-medium py-3 w-[200px] mt-8 rounded-md'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl rounded-lg flex flex-col p-4 my-4  md:my-0 hover:scale-105 duration-300 bg-gray-100'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double_Triple} alt="double" />
                    <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                    <p className='text-4xl text-center font-bold'>$199.99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mt-8'>1 TB Storage</p>
                        <p className='py-2 border-b'>2 Granted User</p>
                        <p className='py-2 border-b'>8 GB RAM</p>
                    </div>
                    <button className='bg-black text-green-500 mx-auto font-medium py-3 w-[200px] mt-8 rounded-md'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double_Triple} alt="triple" />
                    <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                    <p className='text-4xl text-center font-bold'>$239.99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mt-8'>2 TB Storage</p>
                        <p className='py-2 border-b'>3 Granted User</p>
                        <p className='py-2 border-b'>16 GB RAM</p>
                    </div>
                    <button className='bg-green-500 mx-auto font-medium py-3 w-[200px] mt-8 rounded-md'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
