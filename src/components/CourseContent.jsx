import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'
    ;

const CourseContent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const url = 'https://fakestoreapi.com/products';

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    setData(data);
                    setLoading(false);
                    console.log('success')
                }).catch((error) => {
                    setLoading(true);
                    console.log(error)
                });
        }, 5000)
    }, []);


    return (
        <div className='bg-white w-full p-8'>
            <div className='flex md:justify-between flex-col md:flex-row items-center'>
                <p className='text-xl font-bold'>Products</p>
                <div className='flex justify-between gap-1 bg-gray-500 rounded-md p-1 w-[75%]  m-3'>
                    <input type="text" placeholder='Search...' className='px-2 py-2 outline-none w-full rounded-md placeholder:italic' />
                    <div className='text-white bg-green-500 rounded-md py-2 px-3 font-bold hover:bg-green-600 hover:scale-105'><AiOutlineSearch size={25} /></div>
                </div>
            </div>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 gap-8 relative'>

                {loading ? (
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
                ) : data.map((item, index) => {
                    return (
                        <div key={index} className='shadow-xl rounded-xl p-1 mt-8 hover:scale-105 duration-300 flex flex-col justify-between'>
                            <div className='w-full h-40'><img className='object-cover w-full h-40' src={item.image} alt="/" /></div>
                            <p className=' px-2 font-semibold'>{item.title}</p>
                            <p className='font-medium px-2'>Price: N{item.price}</p>
                            <div className='flex items-center justify-center my-2 text-xs'>
                                <div className='flex items-center'><p>{item.rating.rate}</p></div>
                                <span className='mx-2'>|</span>
                                <div className='flex items-center'><p className='capitalize'>{item.category}</p>
                                    <span className='mx-2'>|</span> <p className='capitalize'>{item.rating.count} left</p></div>
                            </div>
                            {/* 'https://wa.link/obolwk' */}
                            <Link to={`/courseinformation/${item.id}`} state={{ fromHome: { data } }}>
                                <button className='w-full bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl py-2 '>Get Product</button></Link>
                        </div>
                    )
                })
                }

            </div>
        </div >
    )

}

export default CourseContent
