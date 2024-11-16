import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        className="object-cover w-full h-full"
        preload="auto"
      >
        <source src="/irc-lp-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}