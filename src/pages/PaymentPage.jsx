import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'

const PaymentPage = () => {
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("")
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("")
    const payWithPayStack = (e) => {
        e.preventDefault();
        const paystack = new PaystackPop();
        paystack.transactions()
    }

    return (
        <div className='h-auto text-black'>
            <div className='bg-green-400 flex justify-center items-center text-2xl text-black font-bold py-4 md:py-8'>
                <h1>Make Payments</h1>
            </div>
            <form action="" className='shadow-xl p-4 flex flex-col gap-4 md:max-w-md lg:max-w-lg xl:max-w-lg max-w-xs bg-gray-500 mx-auto rounded-b-xl mb-8'>
                <div className='flex flex-col gap-2' >
                    <label className='font-semibold' htmlFor="email">Email address</label>
                    <input className='p-2 rounded-md text-black' value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id='email-address' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor="amount">Amount</label>
                    <input className='p-2 rounded-md text-black' value={amount} onChange={(e) => setAmount(e.target.value)} type="tel" id='amount' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor="first-name">First name</label>
                    <input className='p-2 rounded-md text-black' value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" id='first-name' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor="last-name">Last name</label>
                    <input className='p-2 rounded-md text-black' value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" id='last-name' />
                </div>
                <div>
                    <button type='submit' className='bg-green-500 p-3 w-full rounded-md text-black font-semibold' onClick={payWithPayStack}>Pay</button>
                </div>

            </form>
        </div>
    )
}

export default PaymentPage
