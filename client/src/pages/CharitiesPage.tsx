import React, { useEffect, useState } from "react";
import '../styles/pages/CharitiesPage.scss'
import { Navigation } from "../components/Navigation";
import { useNavigate } from "react-router-dom"
import campaignService from "../services/charity-service";

export const CharitiesPage = () => {

    const charities = [{id:'1', heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {id:'1', heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {id:'1', heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}, {heading: 'Dura bura sto chudura', subheading: 'Podkrepi chuduri', amountDonated: 32, url: "https://podkrepi.bg/campaigns/zaedno-da-izgradim-vila-autistika"}];
    const [campaigns, setCampaigns]:any = useState([]);
    const navigation = useNavigate();

    useEffect(()=>{
        getCampaigns();
    }, [])

    const getCampaigns = async () => {
        setCampaigns((await campaignService.getAllCampaigns()).data);
    }


    return (
        <div className="charities-page-container">
            <div className="charities-page-content">
                <div className="heading-container">
                    <span className="heading">Explore charities</span>
                </div>

                <Navigation />

                <h1 className="subheading">All charities</h1>
                
                <div className="charities-list-container">

                    {campaigns.map((charity: any)=>{
                        return (
                        <div className="charity-list-item" onClick={()=>{window.open(`https://dev.podkrepi.bg/campaigns/${charity.slug}`)}}>
                        <div className="charity-img"><img src={`${charity.logo}`} alt="" /></div>
                        <div className="charity-info">
                                <div className="charity-heading">{charity.title}</div>
                                <div className="charity-subheading">{charity.campaignType.category}</div>
                        </div>
                                <span className="charity-donated-amount">{charity.summary.reachedAmount}€</span>
                        </div>)
                    })}

                </div>
            </div>
        </div>
    )
}