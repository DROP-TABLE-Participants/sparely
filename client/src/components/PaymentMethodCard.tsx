import React from "react";
import '../styles/components/PaymentMethodCard.scss'

export const PaymentMethodCard = ({method}: any) => {
    return (
        <div className="payment-method-card">
            <img src={`src/assets/payment-methods-logos/${method}.svg`} alt="" />
        </div>
    )
}