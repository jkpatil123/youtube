import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {  useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {

   const [searchparams]=useSearchParams();
 
    console.log(searchparams.get('v'))
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
    <div className='px-5'>
      <iframe width="1000"
       height="500" src={"https://www.youtube.com/embed/"+searchparams.get('v')}
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage
