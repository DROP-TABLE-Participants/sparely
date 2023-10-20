import React from "react";
import '../styles/components/DonatedAmountCard.scss';


export const DonatedAmountCard = ({donatedAmount}: any) => {
    return (
        <div className="donated-amount-card">
            <h1 className='amount'>{donatedAmount}€</h1>
            <p className='sub-heading'>Donated overall</p>
        </div>
    )
}