import React from 'react'

const Course = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center px-8 py-16'>
            <div className='text-white px-4'>
                <h1 className='text-4xl font-bold md:text-8xl text-green-500 text-center md:text-left mb-4'>Free Online Udemy Courses</h1>
                <p className='text-xl md:text-2xl font-medium mb-6'>Udemy is an Educational site where you can access to learn and upgrade your skills.</p>
                <p className='text-xl md:text-2xl font-medium mb-6'>You can access some premium courses for free through the link where you can learn for free.</p>
                <p className='text-xl md:text-2xl font-medium mb-6'>You can get access for just 1000 naira only, bear in mind that these courses in real sense course more than 9000 naira.</p>
                <p className='text-xl md:text-2xl font-medium mb-6'>If you are very much interested a promo is on and its for a limited number of persons @</p>
                <span className='font-bold  text-2xl md:text-4xl line-through'>1000 naira</span><span className='font-bold  text-2xl md:text-4xl ml-2'>500naira</span>
                {/* <Typed className='font-bold  text-2xl md:text-4xl ml-2' strings={['']} typeSpeed={100} backSpeed={120} loop /> */}
            </div>
            <a href="https://wa.link/obolwk"><button className='bg-green-500 font-bold rounded-md w-[200px] py-3 hover:bg-green-600 mt-4'>Hit me!</button></a>
        </div>
    )
}

export default Course
