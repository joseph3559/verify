import React from 'react'
import { useState } from 'react'
import Upload from './Upload'

const TopCards = () => {
    const [isAdding, setIsAdding] = useState(false)
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>7,846</p>
                <p className='text-gray-600'>Daily News</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>437,876</p>
                <p className='text-green-600'>Verified News</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+11%</span>
            </p>
        </div>
        
        <button  onClick={() => setIsAdding((isAdding) => !isAdding)} type="button" className=" mt-6 mx-6 inline-block px-6 py-2.5 bg-[#1f2937] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Report</button>
        {isAdding?(
        <Upload />
        ): (
          null
        )}
        {/* <button   className='hover:bg-green-50 p-2 shadow-xl rounded-3xl text-lg font-extrabold hover:text-green-700 text-white bg-green-700'>
            Report Now
        </button> */}



        {/* <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>11,437</p>
                <p className='text-gray-600'>Reporters</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+17%</span>
            </p>
        </div> */}
    </div>
  )
}

export default TopCards