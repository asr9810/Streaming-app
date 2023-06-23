import React from 'react'
import FilterButton from './FilterButton'
import { FILTER_BTN_DATA } from './utiles/config'  

const ButttonListContainer = () => {
  return (
    <div className='m-4 flex'>
      {FILTER_BTN_DATA.map((i, index)=>( <div key={index}><FilterButton data={i}/></div>))}
    </div>
  )
}

export default ButttonListContainer
