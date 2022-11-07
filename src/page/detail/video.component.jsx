import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../API/tmdbApi";

const VideoList = (props) => {

    const { category } = useParams();

    const [video, setVideo] = useState([]);

    useEffect(()=> {
        const getVideo = async () => {
            const response = await tmdbApi.getVideos(category, props.id)
            setVideo(response.results.slice(0,5));
        }
        getVideo();
    },[category, props.id]);

    return (
        <div>
            {
                video.map((item, i) => (
                    <Video key={i} item={item} />
                ))
            }
        </div>
    )
}

const Video = (props) => {
    const item = props.item;

    const iframeRef = useRef();

    useEffect(()=> {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    },[]);

    return(
        <div className="video">
            <div className="video_title">
                <h2>{item.name}</h2>
            </div>
            <iframe src={`http://www.youtube.com/embed/${item.key}`} ref={iframeRef} width='100%' title='video'></iframe>
        </div>
    )
}

export default VideoList;