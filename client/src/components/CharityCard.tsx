import React from "react";


export const CharityCard = ({charity}:any) => {
    return (
        <div className="charity-card">
           <h1>{charity.heading}</h1>
            <p>{charity.donatedAmount}</p>
            <img src={charity.image} alt="" />
        </div>
    )
}
