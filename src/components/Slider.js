import React, { useState, useEffect, useRef } from 'react';

const Slider = ({children, track, name, ...props}) => {
  const trackRef = useRef(track);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // console.log('Step1 useEffect', track);
    const timer = setTimeout(() => {
      // console.log('Step1 useEffect timeout', track);
      trackRef.current = track;
      setIsVisible(true);
    }, 800);

    setIsVisible(false);

    return () => clearTimeout(timer);
  }, [track]);

  const className = isVisible ? 'slidedown1' : 'slidedown1 collapsed';

  return (
    <div className={className}>
      {children({ ...props, [name]: trackRef.current })}
    </div>
  );
};

export default Slider;
