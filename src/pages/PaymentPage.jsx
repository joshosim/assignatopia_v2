import React from 'react'
import PaystackPop from '@paystack/inline-js'

const PaymentPage = () => {

    return (
        <div className='h-screen'>
            <div className='text-white'>
                <div className="item">
                    <div className="overlay-effect"></div>
                    <img
                        className="item-image"
                        src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt="product"
                    />
                    <div className="item-details">
                        <p className="item-details__title">Cotton</p>
                        <p className="item-details__amount">NGN 1000</p>
                    </div>
                </div>
                <div className="checkout">
                    <div className="checkout-form">
                        <div className="checkout-field">
                            <label>Name</label>
                            <input />
                        </div>
                        <div className="checkout-field">
                            <label>Email</label>
                            <input />
                        </div>
                        <div className="checkout-field">
                            <label>Phone</label>
                            <input />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage
