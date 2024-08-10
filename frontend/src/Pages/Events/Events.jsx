import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Events = () => {
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token')); 
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const handleCreateEvent = ()=>{
    window.location.href = '/createEvent'
  }
  useEffect(() => {
    const storedUsername = localStorage.getItem('UserName');
    const storedToken = localStorage.getItem('token');

    if (storedUsername !== null) {
      setUsername(storedUsername);
    }

    if (storedToken !== null) {
      setToken(storedToken);
    }

    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/events/getEvents');
        setEvents(response.data); 
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to fetch events');
      }
    }
    fetchEvents();
  }, []);

 if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className='text-3xl text-center p-5 font-bold'>
        Events
      </div>
      <div>
        {username === 'admin' ? (
          <div
            className="flex align-center justify-center items-center"
          >
            <button
              className='bg-blue-400 p-3 rounded-md'
              onClick={handleCreateEvent}
            >
              Create Event
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* <div>
      {events.length > 0 ? (
        <ul>
          {events.map(event => (
            <li key={event._id} className="mb-4">
              <h2 className="text-2xl">{event.EventName}</h2>
              <p>Date: {new Date(event.EventDate).toLocaleDateString()}</p>
              <p>Time: {event.EventTime}</p>
              <p>Location: {event.EventLocation}</p>
              <p>Description: {event.EventDescription}</p>
              <p>SIL Points: {event.SilPoints}</p>
              <p>Core Name: {event.CoreName}</p>
              <p>Core Mobile: {event.CoreMobile}</p>
              <p>Limit: {event.Limit}</p>
              {console.log(event.EventImage)}
              {event.EventImage && (
                <img src={`http://localhost:3001${event.EventImage}`} alt={event.EventName} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found</p>
      )}
      </div> */}
      <div>
      <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Events</h1>
      <div className="flex justify-center mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-l-md">Technical</button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-r-md">Non-Technical</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div onClick={(e)=> window.location.href = `/event/${event._id}`}  key={event.id} className="bg-gray-800 p-4 rounded-lg shadow-lg relative cursor-pointer">
            <img

              src={`http://localhost:3001${event.EventImage}`} 
              alt="Event Poster" 
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Events;
