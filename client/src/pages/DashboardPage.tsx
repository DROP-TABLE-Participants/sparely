import React, { useEffect, useState } from "react";
import {DonatedAmountCard} from "../components/DonatedAmountCard";
import { CharityCardsList } from "../components/CharityCardsList";
import '../styles/pages/DashboardPage.scss';
import {Navigation} from "../components/Navigation";
import campaignService from "../services/charity-service";
import paymentsService from "../services/payments-service";


export const DashboardPage = () => {

    const charities = [{ id:'1', heading: "Помогни на едно дете дъра бъра сто чадъра", donatedAmount: 60.54, imageUrl: "https://lh5.googleusercontent.com/AHoPG0R6LUVzgLQ3dztiVm7k5J0yVju2fPMsLmY8yyslUR2NpF_hju_Vmdz817X1n1DMGyuvmJFUW1C1ScvNZiO5vQcFN5Jrr-LaPs_q0on_D3OGnHsWt9j6FpZK3_BnlNihVtDdD1423kyGjwKp4SAMtsY45fI0e62hmEBN6UmHXaiCEiYr9yWhZgU-dw"}, { id:'2', heading: "Помогни на едно дете дъра бъра сто чадъра", donatedAmount: 52.24, imageUrl: "https://lh5.googleusercontent.com/AHoPG0R6LUVzgLQ3dztiVm7k5J0yVju2fPMsLmY8yyslUR2NpF_hju_Vmdz817X1n1DMGyuvmJFUW1C1ScvNZiO5vQcFN5Jrr-LaPs_q0on_D3OGnHsWt9j6FpZK3_BnlNihVtDdD1423kyGjwKp4SAMtsY45fI0e62hmEBN6UmHXaiCEiYr9yWhZgU-dw"}];
    const [campaigns, setCampaigns]:any = useState([]);
    const donatedAmount = 325.24;


    useEffect(()=>{
        getCampaigns();
    }, [])
    
    const getCampaigns = async () => {
        setCampaigns((await campaignService.getAllCampaigns()).data);
        await paymentsService.makeDonation(1000000, "4c1616b0-1284-4b7d-8b89-9098e7ded2c4");
        console.log((await paymentsService.getUserDonations()).data);
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




