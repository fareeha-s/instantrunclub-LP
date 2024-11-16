import { useState, useEffect } from 'react';

export default function BackgroundVideo() {
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    // Check if we're on iOS and in low power mode
    if (navigator?.getBattery) {
      navigator.getBattery().then(battery => {
        setIsLowPower(battery.charging === false && battery.level <= 0.2);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {isLowPower ? (
        // Only show static image in low power mode
        <img 
          src="/irc-lp-poster.jpg" 
          alt="background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        // Show video with image fallback otherwise
        <>
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
        </>
      )}
    </div>
  );
}