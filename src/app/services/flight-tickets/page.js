"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
import Breadcrumb from "@/components/common/Breadcrumb";

import { flightTicketsData } from "@/data/flightTicketsData";
import FlightTicketCard from "@/components/flightTicketComponents/FlightTicketCard";
import InquiryForms from "@/components/common/InquiryForms";

const Page = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 25,
            effect: "fade", // Use the fade effect
            loop: true,
            fadeEffect: {
                crossFade: true, // Enable cross-fade transition
            },
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination5",
                clickable: true,
            },
        };
    }, []);

    return (
        <>
            <Breadcrumb pagename="Flight Tickets" pagetitle="Flight Tickets" bgImage="/assets/images/banners/flight-tickets.png" />
            <div className="room-suits-page pt-120 mb-120">
                <div className="container one">
                    <InquiryForms defaultTab="flight" showTabs={false} />
                    <div className="row g-lg-4 gy-5">
                        {flightTicketsData.map((flight) => (
                            <div key={flight.id} className="col-lg-4 col-md-6 col-12">
                                <FlightTicketCard flight={flight} settings={settings} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
