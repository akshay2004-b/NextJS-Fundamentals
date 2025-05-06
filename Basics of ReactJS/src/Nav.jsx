import React from 'react'

const Nav = () => {
  return (
    <div className='h-auto w-full flex justify-between items-center p-4 '>
        <div>

        </div>
        <div className='flex gap-4 font-semibold'>
            <h1>MENU</h1>
            <h1>LOCATION</h1>
            <h1>ABOUT</h1>
            <h1>CONTACT</h1>
        </div>
        <div className='mr-4 '>
            <button className='pt-3 pl-5 pr-5 pb-3 bg-red-800 text-white rounded-lg'>LOGIN</button>
        </div>
    </div>
  )
}

export default Nav