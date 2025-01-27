// Success.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the success message from the backend (if needed)
    fetch('http://localhost:4000/success')
      .then((response) => response.json())  // Parse JSON response
      .then((data) => setMessage(data.message || 'Payment Successful!'))  // Set message state
      .catch((error) => console.error('Error fetching success message:', error));
  }, []);  // Empty dependency array means this runs only once when component mounts

  const goToShop = () => {
    navigate('/');  // Navigate to the Shop page
  };

  return (
    <div>
      <h1>{message}</h1>  {/* Display the success message */}
      <button onClick={goToShop}>Go to Shop</button>
    </div>
  );
}

export default Success;
