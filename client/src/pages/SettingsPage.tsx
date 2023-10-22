import React, { useState } from "react";
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
    const [showAddPayment, setShowAddPayment] = useState(false);

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

                        <div className="add-payment-method-card" onClick={() => setShowAddPayment(true)}> 
                            <span>
                                +
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            {showAddPayment && ( 
                 <div className="add-payment-popup-overlay">
                 <div className="add-payment-popup">
                   <h2 className="heading">Add Payment Method</h2>
                   <ul>
                     <li>
                       <label>
                         <input type="radio" name="paymentMethod" value="creditCard" />
                         Credit Card
                       </label>
                     </li>
                     <li>
                       <label>
                         <input type="radio" name="paymentMethod" value="paypal" />
                         PayPal
                       </label>
                     </li>
                   </ul>
                   <div className="terms-and-conditions">
                     <label>
                       <input type="checkbox" name="acceptTerms" />
                        <p>I accept the Terms and Conditions</p>
                     </label>
                   </div>
                   <div className="button-container">
                   <button className="add-button">
                     Add
                   </button>
                   <button className="close-button" onClick={() => setShowAddPayment(false)}>
                     Close
                   </button>
                   </div>
                 </div>
               </div>
            )}
        </div>
    );
};
