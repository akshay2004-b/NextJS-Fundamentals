import React from 'react'

const Hero = () => {
  return (
    <div className='h-5/6 w-full flex '>
        <div className='h-full w-1/2 flex items-center justify-center flex-col gap-4'>
        <div className='text-8xl font-bold'>
        <h1>YOUR FEET</h1>
        <h1>DESERVE</h1>
        <h1>THE BEST</h1>
        </div>

        <div className=' font-semibold mr-20 p-2 text-gray-700 '>
            <h1>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO</h1>
            <h1>HELP YOU WITH OUR SHOES.YOUR FEET DESERVE</h1>
            <h1>THE BEST AND WE'RE HERE TO HELP YOU WITH OUR</h1>
            <h1>SHOES.</h1>
        </div>

        <div className='flex gap-4 p-2 mr-64'>
            <button className='pt-3 pb-3 pl-4 pr-4 bg-red-800 text-white rounded-lg'>Shop now</button>
            <button className='pt-3 pb-3 pl-4 pr-4 bg-red-800 text-white rounded-lg'>Category</button>
        </div>
        </div>
        <div className='h-full w-1/2 flex items-center justify-center'>
        <img className='mr-48 drop-shadow-2xl' src="/Heroimg.png" alt="" />
        </div>
    </div>
  )
}

export default Hero