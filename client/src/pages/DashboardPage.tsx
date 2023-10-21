import React from "react";
import {DonatedAmountCard} from "../components/DonatedAmountCard";
import { CharityCardsList } from "../components/CharityCardsList";
import '../styles/pages/DashboardPage.scss';
import {Navigation} from "../components/Navigation";


export const DashboardPage = () => {

    const charities = [{ id:'1', heading: "Помогни на едно дете дъра бъра сто чадъра", donatedAmount: 60.54, imageUrl: "https://lh5.googleusercontent.com/AHoPG0R6LUVzgLQ3dztiVm7k5J0yVju2fPMsLmY8yyslUR2NpF_hju_Vmdz817X1n1DMGyuvmJFUW1C1ScvNZiO5vQcFN5Jrr-LaPs_q0on_D3OGnHsWt9j6FpZK3_BnlNihVtDdD1423kyGjwKp4SAMtsY45fI0e62hmEBN6UmHXaiCEiYr9yWhZgU-dw"}, { id:'2', heading: "Помогни на едно дете дъра бъра сто чадъра", donatedAmount: 52.24, imageUrl: "https://lh5.googleusercontent.com/AHoPG0R6LUVzgLQ3dztiVm7k5J0yVju2fPMsLmY8yyslUR2NpF_hju_Vmdz817X1n1DMGyuvmJFUW1C1ScvNZiO5vQcFN5Jrr-LaPs_q0on_D3OGnHsWt9j6FpZK3_BnlNihVtDdD1423kyGjwKp4SAMtsY45fI0e62hmEBN6UmHXaiCEiYr9yWhZgU-dw"}];
    const donatedAmount = 325.24;
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
                        <CharityCardsList charities={charities} />
                    </div>
                </main>
            </div>
            </div>
        </>
    )
}




