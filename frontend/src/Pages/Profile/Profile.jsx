import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:3001/api/user/userInfo', {
          headers: {
            authorization: `Bearer ${token}`
          }
        });
        setUserInfo(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-white">Error: {error.message}</div>;
  }

  const { firstName, lastName, email, idNumber, department, year, paid } = userInfo;

  return (
    <div
        className='bg-black w-full'
    >
    <div className=" bg-black text-white w-full">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold">Profile</h1>
      </header>
      <div className=" bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">User Info</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">First Name:</label>
            <p className="text-lg">{firstName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name:</label>
            <p className="text-lg">{lastName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <p className="text-lg">{email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">ID Number:</label>
            <p className="text-lg">{idNumber}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Department:</label>
            <p className="text-lg">{department}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Year:</label>
            <p className="text-lg">{year}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Fest Payment Status:</label>
            <p className="text-lg">{paid ? "Paid":"Not Paid"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Pay Fest Fee:</label>
            <button
            onClick={()=>{navigate('/payFees')}}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Pay </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
