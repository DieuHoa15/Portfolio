import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-stone-200'>
      <h1 className="font-bold text-8xl md:text-9xl text-rose-600">
        404
      </h1>
      <h2 className="font-semibold text-2xl md:text-3xl">
        Page Not Found
      </h2>
      <Link to='/'
        className='rounded-full px-3 py-2 bg-stone-700 text-white hover:bg-stone-500 translate-y-10'>
        Return to Home
      </Link>
    </div>
  )
}

export default NotFoundPage