import React from 'react';

export default function Success() {
  return (
    <img
      style={{ textAlign: 'center' }}
      src={process.env.PUBLIC_URL + '/success.png'}
      alt="completed"
    />
  );
}
