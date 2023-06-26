import React from 'react'


const VideoCard = ({data}) => {

    
    
  return (
    <div className='h-[310px] w-[360px] m-4'>
      <img className='w-[360px] h-[195px] rounded-lg' src={data?.snippet?.thumbnails?.high?.url} alt="" />
      <div className='p-2'>
        <div className='h-[50px] text-ellipsis overflow-hidden '>
            <h1 className='font-bold '>{data?.snippet?.title}</h1>
        </div>
        <h3>{data?.snippet?.channelTitle}</h3>
        <div className='flex '>
            <p>{data?.statistics?.viewCount} views</p>
            <p className='ml-6'>{data?.statistics?.likeCount} likes</p>
        </div>
        
      </div>
    </div>
  )
}

export default VideoCard;
