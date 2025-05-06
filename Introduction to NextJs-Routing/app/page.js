import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='h-screen w-full items-center justify-center flex flex-col'>
      <h1 className='text-9xl font-bold'>THIS IS HOME PAGE</h1>
      <div className='flex mt-6 gap-4 '>
        <Link href="/login" className='text-2xl font-bold'><button className='p-2 bg-red-900 rounded-lg cursor-pointer'>LOGIN</button></Link>
        <Link href="/signup" className='text-2xl font-bold'><button className='p-2 bg-red-900 rounded-lg'>SignUP</button></Link>
        <Link href="/login/test" className='text-2xl font-bold'><button className='p-2 bg-red-900 rounded-lg'>Test</button></Link>
      </div>
    </div>
  )
}
export default page