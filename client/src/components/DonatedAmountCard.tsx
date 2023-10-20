import React from "react";
import '../styles/components/DonatedAmountCard.scss';


export const DonatedAmountCard = ({donatedAmount}: any) => {
    return (
        <div className="donated-amount-card">
            <div className="left">
                <h1 className='amount'>{donatedAmount}€</h1>
                <p className='sub-heading'>Donated overall</p>
            </div>
            <div className="right">
                <img src="../../public/sparely-logo.svg" alt="" />
            </div>
        </div>
    )
}