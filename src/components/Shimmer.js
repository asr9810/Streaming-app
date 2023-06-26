import React from 'react'

const Shimmer = () => {
  return (
    <div className=' flex flex-wrap justify-center'>
      {Array(3).fill().map((item, index)=>(
        <div key={index} className='h-[195px] w-[360px] m-4 bg-gray-200 mt-18 rounded-lg mb-24'></div>
        
      ))}
    </div>
  )
}

export default Shimmer
