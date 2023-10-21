import React from 'react'

const Services = () => {
    const images = {
        pic1: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        pic2: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
    return (
        <div className='text-white'>
            <div>
                <div className='p-4'>
                    <h1 className='font-bold text-xl text-green-500 mb.-2'>Who we are at TeamJoJoCode</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus laudantium et, officia aperiam adipisci ducimus velit eaque unde molestiae atque, laboriosam nostrum magni! Aperiam atque delectus commodi amet autem.
                    </p>
                </div>
                <div className='bg-white text-black py-8'>
                    <h1 className='font-bold text-center text-2xl mb-2'>What we do</h1>
                    <div className='grid md:grid-cols-2 px-4 mt-4'>
                        <img className='object-cover bg-transparent' src={images.pic1} alt="/" />
                        <div className='flex flex-col justify-center px-4'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt quae fugiat fugit a ex error, alias nihil explicabo, ipsam hic? Incidunt nihil adipisci explicabo nemo nulla! Vero, quo aliquid!</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='bg-white text-black py-8'>
                    <h1 className='font-bold text-center text-2xl text-green-500 mb-2'>What we aim to achieve</h1>
                    <div className='grid md:grid-cols-2 px-4'>
                        <div className='flex flex-col justify-center px-4 mb-4'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt quae fugiat fugit a ex error, alias nihil explicabo, ipsam hic? Incidunt nihil adipisci explicabo nemo nulla! Vero, quo aliquid!</p>
                        </div>
                        <img className='object-cover bg-transparent' src={images.pic2} alt="/" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services








