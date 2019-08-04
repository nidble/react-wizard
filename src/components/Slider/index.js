import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './Styles.css';

Slider.defaultProps = {
  as: '',
  delay: 450
};

Slider.propTypes = {
  children: PropTypes.func.isRequired,
  as: PropTypes.string.isRequired,
  delay: PropTypes.number
};

export default function Slider({ children, track, as, delay, ...props }) {
  const trackRef = useRef(track);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      trackRef.current = track;
      setIsVisible(true);
    }, delay);
    setIsVisible(false);

    return () => clearTimeout(timer);
  }, [track, delay]);

  const className = isVisible ? 'slidedown' : 'slidedown collapsed';

  return (
    <div {...{ className }}>
      {children({ ...props, [as]: trackRef.current })}
    </div>
  );
}
