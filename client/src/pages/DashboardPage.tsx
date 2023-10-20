import React from "react";
import {DonatedAmountCard} from "../components/DonatedAmountCard";
import { CharityCardsList } from "../components/CharityCardsList";
import '../styles/pages/DashboardPage.scss';


export const DashboardPage = () => {

    const charities = [{heading: "Помогни на едно дете дъра бъра сто чадъра", donatedAmount: 60.54, imageUrl: "https://lh5.googleusercontent.com/AHoPG0R6LUVzgLQ3dztiVm7k5J0yVju2fPMsLmY8yyslUR2NpF_hju_Vmdz817X1n1DMGyuvmJFUW1C1ScvNZiO5vQcFN5Jrr-LaPs_q0on_D3OGnHsWt9j6FpZK3_BnlNihVtDdD1423kyGjwKp4SAMtsY45fI0e62hmEBN6UmHXaiCEiYr9yWhZgU-dw"}, {heading: "Помогни на едно дете дъра бъра сто чадъра", donatedAmount: 52.24, imageUrl: "https://lh5.googleusercontent.com/AHoPG0R6LUVzgLQ3dztiVm7k5J0yVju2fPMsLmY8yyslUR2NpF_hju_Vmdz817X1n1DMGyuvmJFUW1C1ScvNZiO5vQcFN5Jrr-LaPs_q0on_D3OGnHsWt9j6FpZK3_BnlNihVtDdD1423kyGjwKp4SAMtsY45fI0e62hmEBN6UmHXaiCEiYr9yWhZgU-dw"}];
    const donatedAmount = 325.24;
    return (
        <>
        <div className="dashboard-container">
            <nav className="navbar">
                <div className="buttons-container">
                    <div className="button button-dashboard">Dashboard</div>
                    <div className="button button-settings">Settings</div>
                </div>
            </nav>
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
        </>
    )
}




