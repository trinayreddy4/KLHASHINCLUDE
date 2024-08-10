import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDisplay = () => {
    const { id } = useParams();  
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [registered,isRegistered] = useState(false);
    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/events/${id}`);
                setEvent(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch event details.');
                setLoading(false);
            }
        };
        
        fetchEventDetails();
    }, [id]);
    const handleRegister =async ()=>{
        await axios.post(`http://localhost:3001/api/events/registerevent/${id}`,{},{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>{
            console.log(response);
        }).catch(err=>{
            console.error(err);
        })
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!event) {
        return <div>No event found.</div>;
    }

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl font-bold text-white mb-5">{event.EventName}</h1>
            <img 
                src={`http://localhost:3001${event.EventImage}`} 
                alt={event.EventName} 
                className="rounded-lg shadow-lg mb-5"
            />
            <div className="text-gray-200 mb-3">
                <strong>Date:</strong> {new Date(event.EventDate).toLocaleDateString()}
            </div>
            <div className="text-gray-200 mb-3">
                <strong>Time:</strong> {event.EventTime}
            </div>
            <div className="text-gray-200 mb-3">
                <strong>Location:</strong> {event.EventLocation}
            </div>
            <div className="text-gray-200 mb-3">
                <strong>Description:</strong> {event.EventDescription}
            </div>
            <div className="text-gray-200 mb-3">
                <strong>Sil Points:</strong> {event.SilPoints}
            </div>
            <div className="text-gray-200 mb-3">
                <strong>Core Name:</strong> {event.CoreName}
            </div>
            <div className="text-gray-200 mb-3">
                <strong>Core Mobile:</strong> {event.CoreMobile}
            </div>
            <div className="text-gray-200 mb-3">
                <strong>Limit:</strong> {event.Limit}
            </div>
            <div className="text-gray-200 mb-3">
                <strong>Seats Remaining:</strong> {event.SeatsLeft}
            </div>
            <div>
                <button onClick={handleRegister}  className="bg-blue-400 w-full text-xl p-3 font-bold rounded-md">{registered?"Unregister":"Register"}</button>
            </div>
        </div>
    );
};

export default EventDisplay;
