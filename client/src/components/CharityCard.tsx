import React from "react";
import '../styles/components/CharityCard.scss'
import { useNavigate } from "react-router-dom";



interface Charity {
    slug: string;
    title: string;
    category: string;
    reachedAmount: number;
    logo: string;
    summary : {
        reachedAmount: number;
    }

}

export const CharityCard = ({ charity }: { charity: Charity }) => {
    const navigate = useNavigate();

    return (
        <div className="charity-card" onClick={()=>{navigate(`/charity/${charity.slug}`)}}>
            <div className="image-container">
                <img src={charity.logo} alt="" />
            </div>
            <div className="info-container">
                <h1 className="charity-heading">{charity.title}</h1>
                <p className="donated-amount">{charity.summary.reachedAmount}€</p>
            </div>
        </div>
    )
}