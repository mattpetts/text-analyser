import React from 'react'

export default function Card( { title, value, colorClass } ) {
  return (
    <div className={`p-5 rounded-md w-full text-black bg-gradient-to-r ${ colorClass } lg:w-4/12`}>
        <h3 className='font-bold text-3xl'>{ value }</h3>
        <p className='text-base'>{ title }</p>
    </div>
  )
}
