import React from 'react'

const FilterButton = ({data}) => {
  return (
    <button className='py-2 px-3 mr-4 bg-gray-200 rounded-lg active:bg-gray-900 active:text-white'>
        {data}
    </button>
  )
}

export default FilterButton
