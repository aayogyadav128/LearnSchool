import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPlaylistvids } from '../utils/fetch';
import Videos from './Videos';

const Player = () => {
    const PId = useParams();
    const [videos, setVideos] = useState([])
    let pid = PId['*'];
    useEffect(()=>{
        fetchPlaylistvids(pid).then((x)=>setVideos(x));
    },[pid]);
    return (
        <div>

            <div className="v-list-col">
                        <Videos Videos={videos.items} />
            </div>
        </div>
            )
}

            export default Player