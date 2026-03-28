"use client";
import Link from "next/link";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import destinationSectionData from "../../data/destinationSection.json";
import DecorativeIcon from "../svg/DecorativeIcon";
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const DestinationSection = () => {
  const { section, destinations, banner } = destinationSectionData;

  const topDestinations = useMemo(() => destinations.slice(0, 5), [destinations]);
  const allItems = useMemo(
    () => [...topDestinations, { ...banner, id: "banner", isBanner: true }],
    [topDestinations, banner]
  );

  const swiperSettings = useMemo(() => ({
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { clickable: true, dynamicBullets: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 3 },
    },
  }), []);

  return (
    <>
      <div className="home1-destination-section mb-120">
        <img src={section.vectorImage} alt="" className="section-vector2" />
        <div className="container one">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-40">
                <span>
                  <DecorativeIcon type="left" />
                  {section.subtitle}
                  <DecorativeIcon type="right" />
                </span>
                <h2>{section.title}</h2>
              </div>
            </div>
          </div>

          {/* Mobile Slider */}
          <div className="d-md-none">
            <Swiper {...swiperSettings} className="swiper destination-slider" style={{ paddingBottom: "50px" }}>
              {allItems.map((item) => (
                <SwiperSlide key={item.id} className="swiper-slide" style={{ height: "450px" }}>
                  {item.isBanner ? (
                    <Link href={item.link} className="destination-banner d-block" style={{ height: "100%" }}>
                      <div className="destination-banner-content">
                        <div className="batch">
                          <span>{item.batchText}</span>
                        </div>
                        <h2>{item.heading}</h2>
                        <span className="primary-btn1">{item.buttonText}</span>
                      </div>
                    </Link>
                  ) : (
                    <Link href={item.link} className="destination-card d-block" style={{ height: "100%" }}>
                      <img src={item.image} alt={item.title} style={{ height: "100%", objectFit: "cover", width: "100%" }} />
                      <div className="overlay" />
                      <div className="card-title">
                        <h4>{item.title}</h4>
                      </div>
                      <div className="content">
                        <h4>{item.title}</h4>
                        <div className="eg-tag">
                          <span>{item.title}</span>
                        </div>
                      </div>
                    </Link>
                  )}
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="d-none d-md-block">
            <div className="row g-4">
              {topDestinations.map((destination) => (
                <div key={destination.id} className={destination.colSize}>
                  <Link href={destination.link} className="destination-card d-block">
                    <img src={destination.image} alt={destination.title} />
                    <div className="overlay" />
                    <div className="card-title">
                      <h4>{destination.title}</h4>
                    </div>
                    <div className="content">
                      <div className="eg-tag">
                        <span>{destination.title}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              <div className={banner.colSize}>
                <Link href={banner.link} className="destination-banner d-block">
                  <div className="destination-banner-content">
                    <div className="batch">
                      <span>{banner.batchText}</span>
                    </div>
                    <h2>{banner.heading}</h2>
                    <span className="primary-btn1">{banner.buttonText}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationSection;