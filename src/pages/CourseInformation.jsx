import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
const CourseInformation = () => {
    const params = useParams();
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    const pId = params.id - 1;
    return (
        <div className='w-full p-4 text-white'>
            <div className='my-4'>
                <h1 className='text-2xl font-bold py-8 uppercase'>{data[pId].title}</h1>
                <img className='w-full  object-cover' src={data[pId].imagelink} alt={data[pId].title} />
                <p className='py-2 font-bold text-xl text-green-500'>{data[pId].category}</p>
                <p className='py-8 text-xl'>
                    {data[pId].information}
                </p>
                <h2 className='py-2 text-xl'>Things you will learn</h2>
                <p className='py-8 text-xl'>
                    <ul>
                        {data[pId].list.map(items => {
                            return <li className='mb-1'>{items}</li>
                        })}
                    </ul>
                </p>
                <h2 className='text-center text-2xl font-bold mb-2'>Price</h2>
                <div className='bg-green-500 flex justify-around py-4 rounded-xl text-3xl font-semibold'>
                    <p className='line-through'>{data[pId].price1}</p>
                    <p>{data[pId].price2}</p>
                </div>
                <Link to={`/payment-page`} state={{ fromInfo: { data } }}><button className='w-[200px] text-xl my-3 mx-auto bg-white hover:bg-green-100 text-black font-bold rounded-xl py-4'>Get this Course</button></Link>
            </div>
        </div>
    )
}

export default CourseInformation
