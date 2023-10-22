import React, { useState } from "react";
import '../styles/sparely.scss'
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export interface props {
    amount: number;
    successUrl: string;
    failureUrl: string;
    googleClientId: string;
}

interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string;
    name: string;
}

interface IDonateResponse {
    message: string;
    url: string;
}

export function Sparely({ amount, googleClientId }: props) {
    const [showCampaigns, setShowCampaigns] = useState(false);
    const [showDonateAmount, setShowDonateAmount] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const [selectedCampaignId, setSelectedCampaignId] = useState(null);
    const [userInfo, setUserInfo] = useState<IUser | null>(null);
    const [userToken, setUserToken] = useState<string | null>(null);

    let priceDifference: any = (amount % 1) ? (Math.ceil(amount) - amount).toFixed(2) : 1.00;

    const fetchEvents = () => {
        if (!fetched) {
            fetch('https://sparely-server-sparely.apps.cluster-9kktz.gcp.redhatworkshops.io/campaigns')
                .then(response => response.json())
                .then(data => setCampaigns(data))
                .catch(error => console.error(error));

            setFetched(true);
        }
    }

    const openInNewTab = (url: string) => {
        var win = window.open(url, '_blank');
        win.focus();
    }

    const donate = async (amount: number) => {
        let request: Response = new Response();

        if (userToken) {
            request = await fetch("https://sparely-server-sparely.apps.cluster-9kktz.gcp.redhatworkshops.io/payments/donate", {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify({
                    amount: Number(amount) * 100,
                    campaignId: selectedCampaignId
                }),
            });

        } else {
            request = await fetch("https://sparely-server-sparely.apps.cluster-9kktz.gcp.redhatworkshops.io/payments/donateAnonymously", {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify({
                    amount: Number(amount) * 100,
                    campaignId: selectedCampaignId
                }),
            });
        }

        const response = (await request.json()) as IDonateResponse;

        openInNewTab(response.url);

        return response.url;
    }

    const fetchUserInfo = async (userToken: string) => {
        const request = await fetch("https://sparely-server-sparely.apps.cluster-9kktz.gcp.redhatworkshops.io/users/profile", {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });

        const response = (await request.json()) as IUser;

        setUserInfo(response);
    };

    return (
        <GoogleOAuthProvider clientId={googleClientId}>
            <div className="container">
                <div className="button-style" onClick={() => { setShowCampaigns(true); fetchEvents(); }}>
                    <div className="button-info-container">
                        {!showCampaigns &&
                            <div>
                                <h1 className="button-text">Donate spare change</h1>
                                <GoogleLogin
                                    onSuccess={async (credentialResponse: any) => {
                                        setUserToken(credentialResponse.credential);
                                        await fetchUserInfo(credentialResponse.credential);
                                        setShowCampaigns(true);
                                        fetchEvents();
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />
                            </div>}
                        {showCampaigns && !showDonateAmount && <> {userInfo && <h1 className="charity-text">Welcome {userInfo.name}</h1>}<br /><h1 className="charity-text">Choose charity</h1></>}
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
                            {campaigns.filter(campaign => campaign.state === "active").map((charity: any) => {
                                const isItemSelected = charity.id === selectedCampaignId;
                                const borderStyle = isItemSelected ? "2px solid #0B735A" : "1px solid transparent";
                                return (
                                    <div className="charity-list-item" style={{ border: borderStyle }} onClick={() => {
                                        setSelectedCampaignId(charity.id);
                                    }}>
                                        <p className="charity-list-text">{charity.title.substring(0, 18)}...</p>
                                        <div className="charity-list-arrow" onClick={()=>{window.open(`https://dev.podkrepi.bg/campaigns/${charity.slug}`)}}><p>→</p></div>
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
                            {showCampaigns && !showDonateAmount && <p className="callToActionText" onClick={() => {if(selectedCampaignId != null)setShowDonateAmount(true)}}>Continue</p>}
                            {showCampaigns && showDonateAmount && <p className="callToActionText" onClick={() => donate(priceDifference)}>Donate</p>}
                        </div>
                    }
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}