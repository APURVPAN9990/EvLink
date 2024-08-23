import React, { useState } from 'react';

const PaymentPage = ({ onPaymentSuccess }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = (amount) => {
    // Simulate payment process
    setTimeout(() => {
      setPaymentStatus(`success-${amount}`);
      onPaymentSuccess(true); // Pass payment status as true
    }, 2000); // Simulating a delay for payment processing
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <p>Select an amount:</p>
      <button onClick={() => handlePayment(60)}>Pay ₹60</button>
      <button onClick={() => handlePayment(135)} style={{ marginLeft: '10px' }}>Pay ₹135</button>
      {paymentStatus && <p>Payment of ₹{paymentStatus.split('-')[1]} successful!</p>}
    </div>
  );
};

export default PaymentPage;
