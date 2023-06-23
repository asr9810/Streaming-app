import React from 'react'
// import { useSelector } from 'react-redux';


const SideBar = () => {
  // const isSideBarOpen = useSelector(store => store.SideBar.togleSideBar)
  // if(isSideBarOpen) return null;
  return (
    <div className='p-2 shadow-lg w-[210px]'>
      <ul className='pl-5 flex flex-col'>
        <li className='py-2'>
          Home
        </li>
        <li className='py-2'>
          Shorts
        </li>
        <li className='py-2'>
          History
        </li>
        <li className='py-2'>
          Watch later
        </li>
        <li className='py-2'>
          Your vidoes
        </li>
        <li className='py-2'>
          Liked videos
        </li>
        <div className='font-bold pt-5'>Category</div>
        <ul className='py-2'>Music</ul>
        <ul className='py-2'>Sports</ul>
        <ul className='py-2'>Gaming</ul>
        <ul className='py-2'>Movies</ul>
        <div className='font-bold pt-5'>Explore</div>
        <ul className='py-2'>Live</ul>
        <ul className='py-2'>Trending</ul>
        <ul className='py-2'>News</ul>
        <ul className='py-2'>Learning</ul>
      </ul>
    </div>
  )
}

export default SideBar
