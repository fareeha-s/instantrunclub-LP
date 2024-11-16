import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/irc-lp-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}