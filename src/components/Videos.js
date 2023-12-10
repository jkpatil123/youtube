import React from 'react'

const Videos = ({info}) => {
    // console.log(info)
    const {snippet,statistics }=info;
    const { channelTitle,title }= snippet;
  return (
    <div className='h-50 '>
       <div className='p-2 m-1 w-72 shadow-lg'>
    <img className="rounded-lg m-5"src={snippet.thumbnails.high.url}  />
    <ul>
        <li className='font-small'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} videos</li>
    </ul>

    </div>
    </div>
   
  )
}

export default Videos
