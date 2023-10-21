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
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1.1,
                        spaceBetween: 40,
                      },
                      "@0.70": {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                }}
                className="charities-slider">

                {charities.map((charity:any) => {
                    return <SwiperSlide><CharityCard charity={charity} /></SwiperSlide>
                })}
                
            </Swiper>
        </>
    )
}