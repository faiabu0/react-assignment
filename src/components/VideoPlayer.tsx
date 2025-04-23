import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
    src: string;
  }

export default function VideoPlayer({src}:VideoPlayerProps){
    const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if(!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    }
  }, [src]);

  return (
    <video className="p-4 w-md h-md" ref={videoRef} controls autoPlay={true}/>
  );
}