import React, { useEffect, useRef } from 'react';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/city/index.css';
import '@videojs/themes/dist/fantasy/index.css';
import '../../styles/video.css';
import '@videojs/themes/dist/forest/index.css';
import '@videojs/themes/dist/sea/index.css';
import videojs from 'video.js';

const VideoJS = ({ src, poster, id }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      const player = videojs(videoRef.current);
      return () => {
        if (player) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <video
      ref={videoRef}
      id={id}
      className="video-js vjs-theme-city vjs-fluid"
      poster={poster}
      controls
      data-setup="{}"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoJS; 