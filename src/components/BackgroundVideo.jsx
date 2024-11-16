import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <img 
        src="/irc-lp-poster.jpg" 
        alt="background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/irc-lp-poster.jpg"
        preload="auto"
      >
        <source src="/irc-lp-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}