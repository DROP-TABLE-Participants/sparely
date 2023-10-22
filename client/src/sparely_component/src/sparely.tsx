import React, { useState } from "react";
import '../styles/sparely.scss'

export interface props {
    amount: number;
    successUrl: string;
    failureUrl: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    googleAuth: boolean;
    googleClientId: string;
    googleClientSecret: string;
}

export function Sparely({amount} : props) {
    const [showCampaigns, setShowCampaigns] = useState(false);
    const [showDonateAmount, setShowDonateAmount] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const [selectedCampaignId, setSelectedCampaignId] = useState(null);
    let priceDifference: any = (amount % 1)? (Math.ceil(amount) - amount).toFixed(2) : 1.00;
    const donateOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ campaignId: selectedCampaignId, amount: (priceDifference*100)})
    };

    function fetchEvents() {
        if(!fetched){
            fetch('http://localhost:3000/campaigns')
            .then(response => response.json())
            .then(data => setCampaigns(data))
            .catch(error => console.error(error));
    
            setFetched(true);
        }
    }

    function donate() {
        fetch('http://localhost:3000/payments/donate', donateOptions)
        .then(response => response.json())
        .then(data => console.log("success"));
    }

    return (
    <>
        <div className="container">
            <div className="button-style" onClick={() => {setShowCampaigns(true);fetchEvents();}}>
                <div className="button-info-container">
                    {!showCampaigns && <h1 className="button-text">Donate spare change</h1>}
                    {showCampaigns && !showDonateAmount && <h1 className="charity-text">Choose charity</h1>}
                    {showCampaigns && showDonateAmount && <h1 className="donate-text">Spare Change</h1>}
                    <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/51edb60e-cc0f-451a-96bb-e0adf02c537d?apiKey=efd33163987145d0b4c125656c99890b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/51edb60e-cc0f-451a-96bb-e0adf02c537d?apiKey=efd33163987145d0b4c125656c99890b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51edb60e-cc0f-451a-96bb-e0adf02c537d?apiKey=efd33163987145d0b4c125656c99890b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/51edb60e-cc0f-451a-96bb-e0adf02c537d?apiKey=efd33163987145d0b4c125656c99890b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/51edb60e-cc0f-451a-96bb-e0adf02c537d?apiKey=efd33163987145d0b4c125656c99890b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51edb60e-cc0f-451a-96bb-e0adf02c537d?apiKey=efd33163987145d0b4c125656c99890b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/51edb60e-cc0f-451a-96bb-e0adf02c537d?apiKey=efd33163987145d0b4c125656c99890b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/51edb60e-cc0f-451a-96bb-e0adf02c537d?apiKey=efd33163987145d0b4c125656c99890b&"
                    className="logo"
                    alt="Donation Image"
                    />
                </div>
                {showCampaigns && !showDonateAmount &&
                <div className="charityScroller">
                    {campaigns.map((charity: any)=>{
                        return (
                        // <div className="charity-list-item" onClick={()=>{window.open(`https://dev.podkrepi.bg/campaigns/${charity.slug}`)}}>
                        <div className="charity-list-item" onClick={()=>{setSelectedCampaignId(charity.id)}}>
                            <p>{charity.title.substring(0, 25)}</p>
                        </div>)
                    })}
                </div>
                }

                {showCampaigns && showDonateAmount &&
                <>
                <div className="donateAmountContainer">
                    <p className="donationAmount">{priceDifference}€</p>
                </div>
                <p className="totalAmount">Round up from: {amount}€</p>
                </>
                }

                {showCampaigns &&
                <div className="callToActionButton">
                     {showCampaigns && !showDonateAmount &&<p className="callToActionText" onClick={() => setShowDonateAmount(true)}>Continue</p>}
                     {showCampaigns && showDonateAmount &&<p className="callToActionText" onClick={() => donate()}>Donate</p>}
                </div>
                }
            </div>
        </div>
    </>
    )
}