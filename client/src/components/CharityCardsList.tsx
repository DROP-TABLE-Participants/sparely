import React from "react";
import { CharityCard } from "./CharityCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/components/CharityCardList.scss'


export const CharityCardsList = ({charities}:any) => {
    return (
        <>
            <Swiper
                slidesPerView={1.05}
                spaceBetween={30}
                className="charities-slider">

                {charities.map((charity:any) => {
                    return <SwiperSlide><CharityCard charity={charity} /></SwiperSlide>
                })}
                
            </Swiper>
        </>
    )
}