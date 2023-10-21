import React, { useEffect, useState } from "react";
import {DonatedAmountCard} from "../components/DonatedAmountCard";
import { CharityCardsList } from "../components/CharityCardsList";
import '../styles/pages/DashboardPage.scss';
import {Navigation} from "../components/Navigation";
import campaignService from "../services/charity-service";
import paymentsService from "../services/payments-service";


export const DashboardPage = () => {
    const [campaigns, setCampaigns]:any = useState([]);
    const [donatedAmount, setDonatedAmount]: any = useState(0);


    useEffect(()=>{
        getCampaigns();
        getDonatedAmount();
    }, [])
    
    const getCampaigns = async () => {
        setCampaigns((await campaignService.getAllCampaigns()).data);
    }

    const getDonatedAmount = async () => {
        setDonatedAmount((await paymentsService.getUserDonations()).data.amount)
    }

    return (
        <>
        <div className="dashboard-container">
            <div className="dashboard-content">
                <div className="heading-container">
                    <span className="heading">Dashboard</span>
                </div>
                <Navigation />
                <main>
                    <div className="donation-card-section">
                        <DonatedAmountCard donatedAmount= {donatedAmount} />
                    </div>

                    <div className="charities-section">
                        <h1 className="heading">Your donations</h1>
                        <CharityCardsList charities={campaigns} />
                    </div>
                </main>
            </div>
            </div>
        </>
    )
}




