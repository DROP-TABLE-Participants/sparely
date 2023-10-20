import React from "react";
import '../styles/pages/CharitiesPage.scss'
import {Navigation} from "../components/Navigation";
import { useNavigate } from "react-router-dom"

export const CharitiesPage = () => {

    const charities = [{id:'1', heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {id:'1', heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {id:'1', heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32}];
    const navigation = useNavigate();


    return (
        <div className="charities-page-container">

            <div className="heading-container">
                <span className="heading">Explore charities</span>
            </div>

            <Navigation />

            <h1 className="subheading">All charities</h1>
            
            <div className="charities-list-container">

                {charities.map((charity: any)=>{
                    return (
                    <div className="charity-list-item" onClick={()=>{navigation(`/charity/${charity.id}`)}}>
                       <div className="charity-img"> </div>
                       <div className="charity-info">
                            <div className="charity-heading">{charity.heading}</div>
                            <div className="charity-subheading">{charity.subheading}</div>
                       </div>
                            <span className="charity-donated-amount">{charity.amountDonated}€</span>
                    </div>)
                })}

            </div>
        </div>
    )
}