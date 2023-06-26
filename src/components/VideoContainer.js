import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEO_API } from './utiles/config'
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';



const VideoContainer = () => {
 const [videoData, setVideoData] = useState([]);

  useEffect(()=>{
    getVideoList()
  },[])

  const getVideoList=async()=>{
    const apidata = await fetch(YOUTUBE_VIDEO_API);
    const data = await apidata.json()
    setVideoData(data.items)
    console.log(data.items)
    
  }
  
  return (videoData.length === 0) ? (Array(6).fill().map((i,index)=>(<Shimmer key={index}/>))) : (
    <div className=' flex flex-wrap justify-center'>
      
      {videoData.map((item)=>(<Link key={item.id} to={"/watch?v="+ item.id}><VideoCard  data={item}/></Link>))}
      
    </div>
  )
}

export default VideoContainer
