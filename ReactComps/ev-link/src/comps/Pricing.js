import React from "react";
import '../Css/Pricing.css'

const Pricing = () => {
  const pricingOptions = [
    {
      title: 'Normal Charging',
      price: '₹60/hr',
      description: 'Standard charging speed for EVs.'
    },
    {
      title: 'Fast Charging',
      price: '₹130/hr',
      description: 'High-speed charging for quick top-ups.'
    }
  ];
 //   className="pricing-card">
  return (
    <div className="pricing-container">
      <h1>Pricing Plans</h1><br></br>
      <div className="pricing-options">
        {pricingOptions.map((option) => (
          <div key={option.title} className="pricing-card"> 
       
            <h2>{option.title}</h2>
            <p className="price">{option.price}</p>
            <p className="description">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
