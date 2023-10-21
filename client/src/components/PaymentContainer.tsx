import React from "react";
import { PaymentContainerMethod } from "../styles/components/PaymentContainerMethod.tsx";

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