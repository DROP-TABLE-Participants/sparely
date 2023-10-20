import React from "react";
import { CharityCard } from "./CharityCard";


export const CharityCardsList = ({charities}:any) => {
    return (
        <ul>
            {charities.map((charity:any) => {
                return <li key={charity.heading}><CharityCard charity={charity} /></li>
            })}
        </ul>
    )
}