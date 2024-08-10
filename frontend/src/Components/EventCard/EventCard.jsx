import React from 'react';

const EventCard = ({imgSrc}) => {
  return (
    <div className="flex justify-center items-center  bg-gray-900">
      <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
        <img 
          src={imgSrc} 
          alt="Event Poster" 
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default EventCard;
