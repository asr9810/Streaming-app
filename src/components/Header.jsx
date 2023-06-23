import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BiUserCircle, BiSearch} from 'react-icons/bi'
// import user from '../images/user.png'
import Logo from '../images/Logo.png'
// import { useDispatch } from 'react-redux'
// import { togleSideBar } from '../utils/SlideBarSlice'

const Header = () => {
// const dispatch = useDispatch()
// const handleClick = ()=>{
//   dispatch(togleSideBar())
// }

  return (
    <div className='p-0 m-0 justify-between flex shadow-lg' >
      <div className='flex  p-4'>
        <RxHamburgerMenu className='h-8 cursor-pointer'/>
        <img className=' h-8 ml-2' src={Logo} alt="" />
      </div>
      <div className='flex my-2 w-5/12 rounded-full'>
        <input className='p-2 ml-10 w-full border border-gray-400 rounded-l-full' type="text" placeholder='Search' />
        <button className='cursor-pointer hover:bg-gray-400 border w-20 bg-gray-100 border-gray-400 p-2  rounded-r-full justify-center' ><BiSearch className='mx-auto  ' /></button>
      </div>
      <div className='my-2 w-20 '>
      <BiUserCircle className='h-9 w-14 align-middle justify-center' />
      </div>
    </div>
  )
}

export default Header
