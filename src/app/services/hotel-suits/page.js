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
import Link from "next/link";

import { roomData } from "@/data/hotelSuitsData";
import RoomCard from "@/components/hotelComponents/RoomCard";

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
      <Breadcrumb pagename="Room & Suits" pagetitle="Room & Suits" />
      <div className="room-suits-page pt-120 mb-120">
        <div className="container one">
          <div className="row g-lg-4 gy-5">
            {roomData.map((room) => (
              <div key={room.id} className="col-lg-6 col-md-6">
                <RoomCard room={room} settings={settings} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
