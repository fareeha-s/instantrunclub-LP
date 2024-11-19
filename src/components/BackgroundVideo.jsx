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
        <img 
          src="/irc-lp-poster.png" 
          alt=""
          onError={(e) => {e.target.style.display = 'none'}}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <>
          <img 
            src="/irc-lp-poster.png" 
            alt=""
            onError={(e) => {e.target.style.display = 'none'}}
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
            poster="/irc-lp-poster.png"
            preload="auto"
          >
            <source src="/irc-lp-video.mp4" type="video/mp4" />
          </video>
        </>
      )}
    </div>
  );
}