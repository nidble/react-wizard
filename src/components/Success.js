import React from 'react';
import successImg from '../success.png';

// export default function Success() {
//   return (
//     <img
//       style={{ textAlign: 'center' }}
//       src={'/success.png'}
//       alt="completed"
//     />
//   );
// }

export default function Success({ step }) {
  console.log(successImg);
  return (
    <div
      style={{
        backgroundImage: `url(${successImg})`
      }}
      id={`step${step}_result`}
    >
      success
    </div>
  );
}
