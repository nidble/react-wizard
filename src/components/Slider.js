import React, { useState, useEffect, useRef } from 'react';

export default function Slider(props) {
  const length = useRef(props.length);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('Step1 useEffect', props.length);
    const timer = setTimeout(() => {
      console.log('Step1 useEffect timeout', props.length);
      length.current = props.length;
      props.length > 0 && setIsVisible(true);
    }, 800);

    setIsVisible(false);

    return () => clearTimeout(timer);
  }, [props]);

  const className = isVisible ? 'slidedown1' : 'slidedown1 collapsed';

  return (
    <div className={className}>
      {props.children({ ...props, length: length.current, isVisible })}
    </div>
  );
}
