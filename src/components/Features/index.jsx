import React from 'react';
import iconChat from "../../assets/icon-chat.webp";
import iconMoney from "../../assets/icon-money.webp";
import iconSecurity from "../../assets/icon-security.webp";

const FeatureItem = ({ icon, title, description, alt }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className='features'>
      <h2 className="sr-only">Features</h2>
      <FeatureItem icon={iconChat} title="You are our #1 priority" description="  Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes." alt="Chat Icon"/> 
      
      <FeatureItem icon={iconMoney} title="More savings means higher rates" description=" The more you save with us, the higher your interest rate will be!" alt="Chat Icon"/>

      <FeatureItem icon={iconSecurity} title="Security you can trust" description="We use top of the line encryption to make sure your data and money
          is always safe." alt="Chat Icon"/>
    </div>
  );
};

export default Features;