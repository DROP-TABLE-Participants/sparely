import React, { useEffect } from "react";
import { CharityCard } from "./CharityCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/components/CharityCardList.scss'



export const CharityCardsList = ({charities}:any) => {

    const imageUrls = ['https://lh5.googleusercontent.com/AHoPG0R6LUVzgLQ3dztiVm7k5J0yVju2fPMsLmY8yyslUR2NpF_hju_Vmdz817X1n1DMGyuvmJFUW1C1ScvNZiO5vQcFN5Jrr-LaPs_q0on_D3OGnHsWt9j6FpZK3_BnlNihVtDdD1423kyGjwKp4SAMtsY45fI0e62hmEBN6UmHXaiCEiYr9yWhZgU-dw', 'https://lh3.googleusercontent.com/zuNf7ifS7AS6CLx0OHmfPql8U1nUalAOFlGCWVKKeCFC2sjd8GDmps_HrQMAfPHSyKsQ2hEcFYVMI6jMZAfvt6qyfQAYkQozqP_M8_lEkl3jwcXSsCgZhvXkTovxuCQMXY2QyBfWMXw6Tw0DK2UPxZ0', 'https://lh6.googleusercontent.com/SSBCdi6jMT1_yIqGtLgZctzCQdFgm4noqJ8X3v5wjBMHqhRx7wSEIoULi2zOGNZgGilRUYo0a6GnMKGQNN8zdBBDaNaIyrU_b6W98ngeuYBhvp4h00kY1CZ06eBDZZ_cYfkOkuCg_6qqWRFig7QzPo0', 'https://lh6.googleusercontent.com/Q2TO2qvGXpM52bqoonyxZnimAPzMzXn3oi49IZXu9D4jqMB11sbMqGQ6CGFDFcahi9daYpMavR2RwfIQZl3EjnDQTFfSdjfXvkRGvwmEbJajnj7-qjBZ6xqi1jqAcdp4RJ8i1ELEAZ6iVhxLdVnGIvE', 'https://lh6.googleusercontent.com/ZSdYIQsl5JderBHTQO4NR9G8IXxkbaDgDscMuCuwxDrMt0t6kM5L03-Ey4j0x56yWIMJxCbvVa3PjNsTH1l-PaA-BpT-rcq3caClH9dWPoqVf0XrCYNerZbSfh9-NglNR0CWD7PruO8X', 'https://lh3.googleusercontent.com/kRf1Ar-YFp4F0H4YjJZlm1PGqTd38mcAK-Bxi9qd68qG_4Tx_xChQfcZC2uwDcLk-fhP02Pavor5Ef9txfebIUnozCAzZS2CIyojS6UnR4JHnVSK0poG9j1r4KN2iQPU3V2jUCPV1P3_UJu83mmrijFz-m1pDj2_cm0ZXvSmz6yCUFppsF8dVUGr8Q', 'https://lh6.googleusercontent.com/Dn2lV-POI_hwdQABr75aPA0I8Pd_ZcBhk2fOk2lwJy9kmBrqMDiE7FuXFw1mpO3zecWRHfSum-I31TSLDH_QTgNOV20l23F7dsY-peY-n3-d8lZsp34I3TFmkFRzFOOZvGWoW25fODCmF8xucC_CsfNyDf4FprRp8mTEv1S1qL-tFfPn2W1zyA9v', 'https://lh5.googleusercontent.com/mBr4t3fqrzf7H4co1fnmeIbkeqJOTECoHY_4RJ_CR_MfgKC73SRP1EHHn7FGX9TCCW4JQnIWR0e7Vud65fch-rWLGBxOtfvadvNt9WKuhHsljeN7ZLrbpBFrBXGqhPoW-sJYZzwBNxG6NyiSMadEDJE', 'https://lh4.googleusercontent.com/GPtXp_NQ8giFYYM46MybDbycs2PBvhAvc5nOwWnbnRkIRQy9mN3iGJXuli4dR0CY3ES8xX0RCDE4bXmXwhRWKGZLvxzripX-hAUqMgZeImgO_IDpSHv2Wy9AByDP3w3gB-4yVke1SAl1z0gesX6Ds9E', 'https://lh4.googleusercontent.com/VY5z7t0hxwzhWJby-5G_QOlmorve1RxyZ0MzbvrS_JdZ4KUDejjN_S6KZDUTZtys45Jy1zcEW9S88QiutxJYfiCyu-E4IOcBUp7vlIGdldnu44YtFOtawzrqNOI3D9BUj40vl0Y_NsQibjPa0lY2pkc', 'https://lh4.googleusercontent.com/gphYugtqRfxPpzAic0aOeBp8NuXpCqAKZ53KGQaTG5vNHOfvumR2brzl4PZ8x76h0e547rJVpeS1oQ6O3532tJ6ry46dop3GUsmtPIe0JraLhiwe3iT0PjY0ricpOyjSl0JBCXBvX9Poy5Toiw29E-z64UDHg33fO0y3Y1THtY1S9j4gS1GiFGRLrZIhsg', 'https://lh5.googleusercontent.com/Jnaol8ir-56MJtYFnK6c80znEoZXSE4jIrxkd_gyC7iHAXrS8OUKxdWUNE4n09Siw2Z7x-LDnyhKR0OmT1TqbFyHJeKQ6V7SeZKaWVA6nN9LB6WmEL8V1--bkj2lC11V7K7Cx1nO7_36xlNzm24FALTB98EuI6s8RCQcvslfriN_gapgVOgcIol0f4X0lA']

    charities.map((charity: any, index: any)=>{
        charity.logo = imageUrls[index];
    })

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