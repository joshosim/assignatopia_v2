import React from 'react'

const Contact = () => {
    return (
        <div className=' px-4 py-8'>
            <h1 className='text-green-500 font-bold text-2xl text-center'>Contact TeamJoJoCode</h1>
            <fieldset className='text-white'>
                <legend className='font-medium text-[1rem] py-4'>Send Us a Message</legend>
                <form className='flex flex-col' >
                    <label className=' mb-1 font-semibold first-letter:text-green-500'>Email:</label>
                    <input className='text-black max-w-xl mb-2 rounded-md pl-2 py-2.5' type="email" placeholder='Your Email' />
                    <label className='mb-1 font-semibold first-letter:text-green-500'>Name:</label>
                    <input className='text-black max-w-xl mb-2 rounded-md pl-2 py-2.5' type="text" placeholder='Your Name' />
                    <label className='mb-1 font-semibold first-letter:text-green-500'>Message:</label>
                    <textarea className='text-black max-w-xl mb-2 rounded-md pl-2 py-2.5' name="textarea" id="" cols="30" rows="10" placeholder='Type Message' />
                    <button className='bg-green-500 rounded-md text-black w-[200px] py-3 font-bold mt-2'>Send</button>
                </form>
            </fieldset>
            <address className='py-4 pl-2 text-[1rem] font-medium text-white'>
                <h1 className='text-green-500'>OUR ADDRESS</h1>
                <p>Email us @ teamjojocode@gmail.com</p>
                <p>Phone us with +2348125617305</p>
                {/* <p>Visit our Offline Store at TeamJoJoCode Block, Imo State.</p> */}
            </address>
        </div>
    )
}

export default Contact
