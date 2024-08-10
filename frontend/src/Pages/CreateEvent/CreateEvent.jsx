import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    EventName: '',
    EventDate: '',
    EventTime: '',
    EventLocation: '',
    EventDescription: '',
    SilPoints: '',
    CoreName: '',
    CoreMobile: '',
    Limit: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token == null) {
      window.location.href = '/login'; 
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (imageFile) {
      data.append('image', imageFile);
    }

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post('http://localhost:3001/api/events/createEvent', data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      });
      
      setStatus(`Success: ${response.data.message}`);
    } catch (error) {
      console.error('Error:', error);
      setStatus(`Error: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <div className="p-5 text-black">
      <h1 className="text-3xl font-bold mb-5 text-white">Create New Event</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-gray-400">Event Name:</label>
          <input
            type="text"
            name="EventName"
            value={formData.EventName}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Event Date:</label>
          <input
            type="date"
            name="EventDate"
            value={formData.EventDate}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Event Time:</label>
          <input
            type="time"
            name="EventTime"
            value={formData.EventTime}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Event Location:</label>
          <input
            type="text"
            name="EventLocation"
            value={formData.EventLocation}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Event Description:</label>
          <textarea
            name="EventDescription"
            value={formData.EventDescription}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Sil Points:</label>
          <input
            type="number"
            name="SilPoints"
            value={formData.SilPoints}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Core Name:</label>
          <input
            type="text"
            name="CoreName"
            value={formData.CoreName}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Core Mobile:</label>
          <input
            type="tel"
            name="CoreMobile"
            value={formData.CoreMobile}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Limit:</label>
          <input
            type="number"
            name="Limit"
            value={formData.Limit}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Event Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 text-white rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {status && (
        <div className="mt-4 text-red-500">
          {status}
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
