import React from "react";
import {DonatedAmountCard} from "../components/DonatedAmountCard";
import { CharityCardsList } from "../components/CharityCardsList";


export const DashboardPage = () => {

    const charities = [{heading: "Charity 1", donatedAmount: 0, image: ""}, {heading: "Charity 2", donatedAmount: 0, image: ""}];
    return (
        <>
        <nav>
            <ul>
                <li>
                    <a href="/">Dashboard</a>
                </li>
                <li>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </nav>
            <main>
                <DonatedAmountCard />
                <div className="charities-section">
                    <h2>Your donations</h2>
                    <CharityCardsList charities={charities} />
                </div>
            </main>
        </>
    )
}




