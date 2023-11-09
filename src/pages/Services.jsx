import React, { useEffect, useState } from 'react'
import { RiHeart3Fill } from 'react-icons/ri'
import { ThreeCircles } from 'react-loader-spinner'

const Services = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const url = 'https://newsapi.org/v2/everything?q=apple&from=2023-11-07&to=2023-11-07&sortBy=popularity&apiKey=9584f3fb4b244968abad9c2cf049011d';

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    setData(data.articles);
                    setLoading(false);
                    console.log('success')
                }).catch((error) => {
                    setLoading(true);
                    console.log(error)
                });
        }, 5000)
    }, []);
    //9584f3fb4b244968abad9c2cf049011d-key
    return (
        <div className='text-black'>
            <div className='pb-4 bg-[#EFD9CA]'>
                <p className='h-2'></p>
                <h1 className='ml-4 shadow-lg font-bold text-xs rounded-2xl px-2 py-2 bg-[#000300] text-[#EFD9CA] w-[120px] grid place-content-center cursor-pointer'>Apple News</h1>
                <p className='h-3'></p>
                {loading ?
                    (<div className='grid place-content-center'>
                        <div className='flex justify-center items-center flex-col h-[50vh]'>
                            <ThreeCircles
                                height="100"
                                width="100"
                                color="#000300"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="three-circles-rotating"
                                outerCircleColor="#000000"
                                innerCircleColor="#000330"
                                middleCircleColor="#000300"
                            />
                        </div>
                    </div>) :
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        {data.map(items => (
                            <div className='shadow-lg rounded-lg bg-white relative m-4'>
                                <div className='absolute top-4 right-4 flex flex-col gap-0 items-center'>
                                    <RiHeart3Fill size={30} className='text-red-500 shadow-xl' />
                                    <p className='font-bold'>90</p>
                                </div>
                                <img src={items.urlToImage} alt="/" className='rounded-t-lg w-full h-40 md:h-80 object-cover' />
                                <div className='p-2'>
                                    <h1 className='font-bold px-2 text-[1rem] md:text-xl'>{items.title}</h1>

                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div >
    )
}

export default Services








