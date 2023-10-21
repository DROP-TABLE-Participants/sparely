import React from "react";
import { Navigation } from "../components/Navigation";
import '../styles/pages/CharityInfoPage.scss';
import link from '../assets/link-icon.png';



export const CharityInfoPage = () => {

    const charity = {
        id: 1,
        imageUrl: "https://lh5.googleusercontent.com/AHoPG0R6LUVzgLQ3dztiVm7k5J0yVju2fPMsLmY8yyslUR2NpF_hju_Vmdz817X1n1DMGyuvmJFUW1C1ScvNZiO5vQcFN5Jrr-LaPs_q0on_D3OGnHsWt9j6FpZK3_BnlNihVtDdD1423kyGjwKp4SAMtsY45fI0e62hmEBN6UmHXaiCEiYr9yWhZgU-dw",
        heading: "Charity Name",
        donatedAmount: 1000
    }

    return (

       
        <div className="charity-info-page-container">
             <div className="heading-container">
                    <span className="heading">Charity Info</span>
                </div>
                <div className="nav-wrapper">
                <Navigation />
                </div>
            <div className="image-container">
                <img src={charity.imageUrl} alt="image" />
            </div>

            <div className="description-container">
                <p>{charity.heading}...</p>
            </div>

            <div className="donation-container">
                <p>Total money donated via Sparely</p>
                <div>{charity.donatedAmount}</div>
            </div>

            <hr/>
            <div className="social-wrapper">
                <h1>Social</h1>
                <img src={link} alt="" />
                <a href="#">www.saveanderi.org</a>
            </div>

        </div>
    )
}