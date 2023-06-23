import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEO_API } from './utiles/config'



const VideoContainer = () => {
 const [videoData, setVideoData] = useState([]);

  useEffect(()=>{
    getVideoList()
  },[])

  const getVideoList=async()=>{
    const apidata = await fetch(YOUTUBE_VIDEO_API);
    const data = await apidata.json()
    setVideoData(data.items)
    
  }

  return (
    <div className='m-8'>
      <VideoCard data={videoData[0]}/>
    </div>
  )
}

export default VideoContainer
