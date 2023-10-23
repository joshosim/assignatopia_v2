import React, { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
    useEffect(() => emailjs.init('bJZtNWlhxbcpVlRRj'), []);

    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = 'service_cgugnbj';
        const templateId = 'template_liswngh';
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: nameRef.current.value,
                recipient: emailRef.current.value,
                massage: messageRef.current.value
            });
            alert("Email successfully sent check inbox");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className=' px-6 py-8'>
            <h1 className='text-green-500 font-bold text-2xl text-center'>Contact TeamJoJoCode</h1>
            <address className='py-4 text-[1rem] font-medium text-white'>
                <h1 className='text-green-500'>OUR ADDRESS</h1>
                <p>Email us @ teamjojocode@gmail.com</p>
                <p>Phone us with +2348125617305</p>
                {/* <p>Visit our Offline Store at TeamJoJoCode Block, Imo State.</p> */}
            </address>
            <fieldset className='text-white'>
                <legend className='font-medium text-[1rem] py-4'>Send Us a Message</legend>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <label className=' mb-1 font-semibold first-letter:text-green-500'>Email:</label>
                    <input className='text-black max-w-xl mb-2 rounded-md pl-2 py-2.5' name="" ref={emailRef} type="email" placeholder='Your Email' />
                    <label className='mb-1 font-semibold first-letter:text-green-500'>Name:</label>
                    <input className='text-black max-w-xl mb-2 rounded-md pl-2 py-2.5' ref={nameRef} type="text" placeholder='Your Name' />
                    <label className='mb-1 font-semibold first-letter:text-green-500'>Message:</label>
                    <textarea className='text-black max-w-xl mb-2 rounded-md pl-2 py-2.5' ref={messageRef} name="textarea" id="" cols="30" rows="10" placeholder='Type Message' />
                    <button className='bg-green-500 rounded-md text-black w-[200px] py-3 font-bold mt-2' disabled={loading}>Send</button>
                </form>
            </fieldset>

        </div>
    )
}

export default Contact
