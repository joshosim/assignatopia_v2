import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cgugnbj', 'template_liswngh', form.current, 'bJZtNWlhxbcpVlRRj')
            .then((result) => {
                alert('Email has successfully been sent!')

            }, (error) => {
                alert('Error! Email has not been sent!')

            });
        e.target.reset();
    };
    return (
        <div className='mx-auto p-6 max-w-xl'>
            <h1 className='text-green-500 font-bold text-2xl text-center'>Contact TeamJoJoCode</h1>
            <address className='py-4 text-[1rem] font-medium text-[#000300]'>
                <h1 className='text-green-500'>OUR ADDRESS</h1>
                <p>Email us @ teamjojocode@gmail.com</p>
                <p>Phone us with +2348125617305</p>
                {/* <p>Visit our Offline Store at TeamJoJoCode Block, Imo State.</p> */}
            </address>
            <fieldset>
                <legend className='font-medium text-[1rem] py-4'>Send Us a Message</legend>
                <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
                    <label className='mb-1 font-semibold first-letter:text-green-500'>Name:</label>
                    <input className='bg-gray-300 text-black max-w-xl mb-2 rounded-md pl-2 py-2.5' type="text" name='to_name' placeholder='Your Name' />
                    <label className=' mb-1 font-semibold first-letter:text-green-500'>Email:</label>
                    <input className='bg-gray-300 text-black max-w-xl mb-2 rounded-md pl-2 py-2.5' type="email" name='from_name' placeholder='Your Email' />
                    <label className='mb-1 font-semibold first-letter:text-green-500'>Message:</label>
                    <textarea className='bg-gray-300 text-black max-w-xl mb-2 rounded-md pl-2 py-2.5' name="message" id="" cols="30" rows="10" placeholder='Type Message' />
                    <input className='bg-green-500 rounded-md text-black w-[200px] py-3 font-bold mt-2' type="submit" value="Send" />
                </form>
            </fieldset>

        </div>
    )
}

export default Contact
