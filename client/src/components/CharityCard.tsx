import React from "react";
import '../styles/components/CharityCard.scss'
import { useNavigate, useParams } from "react-router-dom";



export const CharityCard = ({charity}:any) => {

    const navigate = useNavigate();

    return (
        <div className="charity-card" onClick={()=>{navigate(`/charity/${charity.id}`)}}>
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