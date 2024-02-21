import React, { useState } from "react";
import '../styles/pages/CharitiesPage.scss';


export const CharityListItem = ({charity}: any) => {

    const [isSelected, setIsSelected] = useState(true);

    return (
        <div className={"campaign-list-item " + (isSelected ? 'selected' : 'deselected')} onClick={()=>{setIsSelected(!isSelected)}}>
            <div className="charity-img"><img src={`${charity.logo}`} alt="" /></div>
            <div className="charity-info">
                    <div className="charity-heading">{charity.title}</div>
                    <div className="charity-subheading">{charity.campaignType.category}</div>
            </div>
            <span className="charity-donated-amount">{charity.summary.reachedAmount}€</span>
        </div>
    )
}