import React from 'react'

const CourseContent = () => {
    return (
        <div className='bg-white w-full p-8'>
            <p className='text-xl'>The following courses and more are available..</p>
            <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
                <div className='shadow-xl rounded-xl p-8 mt-8 hover:scale-105 duration-300'>
                    <h1 className='text-center font-bold text-xl mt-[-3rem] mb-4'>Courses</h1>
                    <ul>
                        <li className='border-b pb-2'>Azure DevOps Bootcamp: Zero to Hero (Pipelines,Boards,Repos)</li>

                        <li className='border-b pb-2'> Create a WordPress website with Hostinger!</li>

                        <li className='border-b pb-2'> Figma Design Course 2023. Your Website from Start to Finish</li>

                        <li className='border-b pb-2'>Building AI Saas Apps / AI Tools with [No Code] x ChatGPT</li>

                        <li className='border-b pb-2'>Create and Sell Digital Art using AI [Passive Income]</li>
                        <li className='border-b pb-2'>Learn KDP - Affliate Marketing</li>
                    </ul>
                </div>
                <div className='shadow-xl rounded-xl mt-8 p-8 hover:scale-105 duration-300'>
                    <h1 className='text-center font-bold text-xl mt-[-3rem] mb-4'>Courses</h1>
                    <ul>
                        <li className='border-b pb-2'>WordPress For Beginners- Fast And Best Methodes
                        </li>
                        <li className='border-b pb-2'>Top 140+ Most Asked C Language MCQ in Interview [Sept. 2023]</li>

                        <li className='border-b pb-2'>Introduction to Quantum Computing</li>

                        <li className='border-b pb-2'>iOS 16 Swift & SwiftUI - Complete iOS App Development</li>
                        <li className='border-b pb-2'>Graphics Design</li>
                        <li className='border-b pb-2'> Ultimate T-shirt Design Mastery with Adobe Illustrator CC</li>

                    </ul>
                </div>
                <div className='shadow-xl rounded-xl mt-8 p-8 hover:scale-105 duration-300'>
                    <h1 className='text-center font-bold text-xl mt-[-3rem] mb-4'>Courses</h1>
                    <ul>
                        <li className='border-b pb-2'>Build Profitable E-Commerce Stores with WordPress & Woostify</li>

                        <li className='border-b pb-2'> Build, Host & Manage WordPress Websites using AI [10Web]</li>

                        <li className='border-b pb-2'> Computer Networking Masterclass: Interview Success</li>

                        <li className='border-b pb-2'>Azure Cloud Solutions:Hands On Training:AZ-900 AZ-104 AZ-305</li>

                        <li className='border-b pb-2'>Build a Backend REST API with Node JS from Scratch</li>
                    </ul>
                </div>
                <div className='shadow-xl rounded-xl mt-8 p-8 hover:scale-105 duration-300'>
                    <h1 className='text-center font-bold text-xl mt-[-3rem] mb-4'>Courses</h1>
                    <ul>
                        <li className='border-b pb-2'> CSS, JavaScript,PHP And Python Programming All in One Course</li>

                        <li className='border-b pb-2'> Java And PHP Complete Course</li>

                        <li className='border-b pb-2'>Excel - Microsoft Excel Course Beginner to Expert 2023
                        </li>
                        <li className='border-b pb-2'>Secure Your Wordpress Website For Beginners</li>
                        <li className='border-b pb-2'>UI and UX Design Basics</li>
                        <li className='border-b pb-2'>Python For Beginners Course In-Depth</li>
                        <li className='border-b pb-2'>Web Development - Front End and back End</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CourseContent
