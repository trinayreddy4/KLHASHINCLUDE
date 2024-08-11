import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paidAlready, setPaidAlready] = useState(false);
  const [responseId, setResponseId] = useState("");
  const [responseState, setResponseState] = useState({});

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
      document.head.appendChild(script);
    });
  };

  const createRazorPayOrder = () => {
    const data = JSON.stringify({
      amount: 100 * 100, // Amount in paise (e.g., 100 INR = 10000 paise)
      currency: "INR"
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/api/pg/pay",
      headers: {
        'Content-type': "application/json",
      },
      data: data
    };

    axios.request(config)
      .then((res) => {
        console.log(JSON.stringify(res.data));
        handleRazorpayScreen(res.data.order_id, res.data.amount);
      }).catch((e) => console.log(e));
  };

  const handleRazorpayScreen = async (order_id, amount) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Error in loading Razorpay script");
      return;
    }

    const options = {
      key: "rzp_test_VnCydNLDtD44bR",
      amount: amount,
      currency: "INR",
      name: userInfo.firstName,
      description: "Test Transaction",
      order_id: order_id,
      handler: function (response) {
        setResponseId(response.razorpay_payment_id);
        verifyPayment(response);
      },
      theme: {
        color: "#3399cc"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const verifyPayment = async (response) => {
    try {
      const verifyURL = `http://localhost:3001/api/pg/verify`;
      const { data } = await axios.post(verifyURL, response);
      setResponseState(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/user/userInfo', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.paid === true) {
          setPaidAlready(true);
        }
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

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Payment Form</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              value={`${userInfo.firstName}`}
              disabled
              className="w-full mt-1 p-2 bg-gray-800 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              value={userInfo.email}
              disabled
              className="w-full mt-1 p-2 bg-gray-800 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Amount</label>
            <input
              type="text"
              placeholder="0"
              value='100' // Amount in INR for display purposes
              required
              readOnly
              className="w-full mt-1 p-2 bg-gray-800 rounded"
            />
          </div>
          <div className="text-center">
            {paidAlready ? (
              <p className="text-red-500">You have already paid</p>
            ) : (
              <button
                type="button"
                onClick={createRazorPayOrder}
                id='PayNowBtn'
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Pay Now
              </button>
            )}
            {responseId?`${responseId}`:""}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
