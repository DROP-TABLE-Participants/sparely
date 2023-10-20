import React from "react";
import "../styles/components/PaymentContainer.scss";
import {PaymentContainerMethod} from "../styles/components/PaymentContainerMethod";

interface PaymentMethod {
    imageUrl: string;
   
}

export const PaymentContainer = (method: PaymentMethod) => {
    

    return (
        <div className="payment-container">
                <PaymentContainerMethod src={method.imageUrl}/>
        </div>
    )
}