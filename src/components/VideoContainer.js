import React, { useEffect, useState } from 'react'
import { apiUrl } from '../utils/constants';
import Videos from './Videos';
import { Link } from 'react-router-dom';
const VideoContainer = () => {

  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos= async()=>{
    const data = await fetch(apiUrl);
    const res = await data.json();
    // console.log(res);
    setVideos(res.items)

  }
  
  return (
    <div className='flex flex-wrap'>
    {videos.map((video,index)=>(
      <div key={index}>
      <Link to={"/watch?v="+video.id}>
      <Videos key={video.id}  info={video}/></Link>
      </div>
      ))}
    {/* <Videos info={videos[0]}/> */}
      
    </div>
  )
}

export default VideoContainer
