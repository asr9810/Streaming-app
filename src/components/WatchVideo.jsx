import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from './utiles/sideBarSlice';
import { useSearchParams } from 'react-router-dom';
import CommentList from './CommentList';


const WatchVideo = () => {
 const [searchParams] = useSearchParams();   
 
 const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(closeSideBar());
   },[])
    
  return (
    <div className='m-10 flex flex-col'>
      <iframe width="940" height="520" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <div className=' mt-4'>
        <p className='font-bold'>Comments :</p>
        <CommentList/>
      </div>
    </div>
  )
}

export default WatchVideo
