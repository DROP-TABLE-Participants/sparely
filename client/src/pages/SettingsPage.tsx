import React from "react";
import { PaymentContainer } from "../components/PaymentContainer";
import "../styles/pages/SettingsPage.scss";
import { Navigation } from "../components/Navigation";

interface PaymentMethod {
    name: string;
    imageUrl: string;
}

const paymentMethods: PaymentMethod[] = [
    {
        name: "Apple Pay",
        imageUrl: "src/assets/apple-pay.png",
    },
    {
        name: "PayPal",
        imageUrl: "src/assets/paypal.png",
    },
    {
        name: "Visa",
        imageUrl: "src/assets/visa.png",
    },
    
];

export const SettingsPage = () => {
    return (
        <div className="settings-page">
            <div className="heading-wrapper">
                <h1>Setting</h1>
                
            </div>
            <Navigation />
            <div className="payment-wrapper">
                {paymentMethods.map((method) => (
                    <PaymentContainer
                        key={method.name}
                        name={method.name}
                        imageUrl={method.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};
