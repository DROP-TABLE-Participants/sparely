import React from "react";
import { PaymentContainer } from "../components/PaymentContainer";
import "../styles/pages/SettingsPage.scss";
import { Navigation } from "../components/Navigation";

interface PaymentMethod {
    imageUrl: string;
}

const paymentMethods: PaymentMethod[] = [
    {
        
        imageUrl: "src/assets/apple-pay.png",
    },
    {
       
        imageUrl: "src/assets/paypal.png",
    },
    {
      
        imageUrl: "src/assets/visa.png",
    },
    
];

export const SettingsPage = () => {
    return (
        <div className="settings-page">
            <div className="heading-wrapper">
                <h1>Setting</h1>
            </div>
            <div className="navigation-wrapper">
                <Navigation />
            </div>
            <h2>Payment Methods</h2>
            <div className="payment-wrapper">
            
                {paymentMethods.map((method) => (
                    <PaymentContainer
                        key={method.imageUrl}
                        imageUrl={method.imageUrl}
                    />
                ))}
            </div>

            <div className="security-wrapper">
                <h2>Security</h2>
              
            </div>
        </div>
    );
};
