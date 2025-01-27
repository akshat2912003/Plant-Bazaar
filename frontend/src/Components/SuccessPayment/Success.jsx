import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Success.css';

const Success = () => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/');
    };

    return (
        <div className="success-container">
            <div className="success-box">
                <div className="success-icon">
                    <span>💲</span>
                </div>
                <h1>Payment Successful</h1>
                <p>Thank you for your payment!</p>
                <button onClick={handleContinueShopping} className="success-button">
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default Success;


