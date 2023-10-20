import React from "react";
import '../styles/components/CharityCard.scss'


export const CharityCard = ({charity}:any) => {
    return (
        <div className="charity-card">
            <div className="image-container">
                <img src={charity.imageUrl} alt="" />
            </div>
            <div className="info-container">
                <h1 className="charity-heading">{charity.heading}</h1>
                <p className="donated-amount">{charity.donatedAmount}€</p>
            </div>
        </div>
    )
}