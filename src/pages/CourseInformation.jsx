import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
const CourseInformation = () => {
    const params = useParams();
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    const pId = params.id - 1;
    return (
        <div className='w-full p-4 text-[#000300]'>
            <div className='my-4 text-[1rem] md:text-xl'>
                <h1 className='text-2xl font-bold py-8 uppercase'>{data[pId].title}</h1>
                <img className='w-full md:h-[450px] h-[200px] object-cover' src={data[pId].imagelink} alt={data[pId].title} />
                <p className='py-2 font-bold text-green-500'>{data[pId].category}</p>
                <p className='py-8'>
                    {data[pId].information}
                </p>
                <h2 className='py-2'>Things you will learn</h2>
                <p className='py-8'>
                    <ul>
                        {data[pId].list.map(items => {
                            return <li className='mb-1'>{items}</li>
                        })}
                    </ul>
                </p>
                <h2 className='text-center font-bold mb-2'>Price</h2>
                <div className='bg-green-500 flex justify-around py-4 rounded-xl font-semibold'>
                    <p className='line-through'>{data[pId].price1}</p>
                    <p>{data[pId].price2}</p>
                </div>
                <Link to={`/payment-page`} state={{ fromInfo: { data } }}><button className='w-[200px] my-3 mx-auto bg-gray-500 hover:bg-gray-400 text-white font-bold rounded-xl py-4 shadow-lg'>Buy Now</button></Link>
            </div>
        </div>
    )
}

export default CourseInformation
