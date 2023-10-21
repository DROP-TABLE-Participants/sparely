import React from "react";
import { PaymentMethodCard } from "../components/PaymentMethodCard";
import "../styles/pages/SettingsPage.scss";
import { Navigation } from "../components/Navigation";

interface PaymentMethod {
    method: string;
}

const paymentMethods: PaymentMethod[] = [
    {
        
        method: "googlePay",
    },
    {
       
        method: "paypal",
    },
    {
      
        method: "visa",
    },
    
];

export const SettingsPage = () => {
    return (
        <div className="settings-page-container">
            <div className="settings-page-content">
                <div className="heading-container">
                    <span className="heading">Settings</span>
                </div>

                <Navigation />

                <div className="payment-methods-section">

                    <h2 className="heading">Payment Methods</h2>
                    <div className="payments-grid">
                    
                        {paymentMethods.map((method) => (
                            <PaymentMethodCard
                                method={method.method}
                            />
                        ))}

                        <div className="add-payment-method-card">
                            <span>
                                +
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
