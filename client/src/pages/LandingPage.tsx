import React from "react";
import logo from "../assets/logo.png";
import "../styles/pages/LandingPage.scss";
import { AuthPage } from "../pages/Auth";

export const LandingPage = () => {
    return (
        <div className="page-wrapper">
            <div className="heading-wrapper">
                <img src={logo} alt="logo" />
                <div className="text-wrapper">
                    <span>Spare</span>
                    <span>ly</span>
                </div>
                <p></p>
            </div>

            <div className="google-wrapper">
                <AuthPage/>
            </div>
        </div>
    );
}