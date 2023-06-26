import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SideBar = () => {
  const sideBarMenu = useSelector((store)=> store.sideBar.isSideBarOpen)
  if(!sideBarMenu) return null;
  // const isSideBarOpen = useSelector(store => store.SideBar.togleSideBar)
  // if(isSideBarOpen) return null;
  return (
    <div className='p-2 shadow-lg'>
      <ul className=' flex flex-col w-[200px]'>
        <li className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>
          <Link to="/">Home</Link>
        </li>
        <li className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>
          Shorts
        </li>
        <li className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>
          History
        </li>
        <li className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>
          Watch later
        </li>
        <li className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>
          Your vidoes
        </li>
        <li className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>
          Liked videos
        </li>
        <div className='font-bold pt-5 pl-2'>Category</div>
        <ul className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>Music</ul>
        <ul className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>Sports</ul>
        <ul className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>Gaming</ul>
        <ul className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>Movies</ul>
        <div className='font-bold pt-5 pl-2'>Explore</div>
        <ul className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>Live</ul>
        <ul className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>Trending</ul>
        <ul className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>News</ul>
        <ul className='py-2 pl-5 hover:bg-gray-200 cursor-pointer'>Learning</ul>
      </ul>
    </div>
  )
}

export default SideBar
