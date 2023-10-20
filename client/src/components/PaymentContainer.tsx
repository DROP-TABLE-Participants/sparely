import React from "react";
import "../styles/components/PaymentContainer.scss";


interface PaymentMethod {
    imageUrl: string;
    name: string;
}

export const PaymentContainer = (method: PaymentMethod) => {
    

    return (
        <div className="payment-container">
                <img src={method.imageUrl} alt={method.name} />
                <button></button>
        </div>
    )
}