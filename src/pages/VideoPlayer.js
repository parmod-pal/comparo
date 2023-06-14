import { useState } from "react";
import Menu from '../Components/Menu';
import Video from '../Components/Video';
import "../style.css";

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};
const VideoNames = Object.keys(videos);

export default function VideoPlayer(){
  const[videoSrc,SetVideoSrc] = useState(videos.deer);

  function onSelectVideo(video){
    const videoSrc = videos[video];
    SetVideoSrc(videoSrc);
  }

  return (
    <>
    <div>
      <h1>Project 6 : Video Player</h1>
      <Menu onSelectVideo={onSelectVideo} VideoValues={VideoNames} />
      <Video videoSrc={videoSrc} />
    </div>
    </>
  )  
  
}