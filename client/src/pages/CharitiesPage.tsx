import React, { useEffect, useState } from "react";
import '../styles/pages/CharitiesPage.scss'
import { Navigation } from "../components/Navigation";
import { CharityListItem } from "../components/CharityListItem";
import { useNavigate } from "react-router-dom"
import campaignService from "../services/charity-service";

export const CharitiesPage = () => {

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
                       <CharityListItem charity={charity}/>)
                    })}

                </div>
            </div>
        </div>
    )
}