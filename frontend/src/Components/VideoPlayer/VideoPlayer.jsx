import React from 'react';

const VideoPlayer = ({srcVideo}) => {
  return (
    <div>
      <video autoPlay muted loop className='w-full'>
        <source src={srcVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;