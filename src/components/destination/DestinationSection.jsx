"use client";
import Link from "next/link";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Pagination,
} from "swiper";
import destinationSectionData from "../../data/destinationSection.json";
import DecorativeIcon from "../svg/DecorativeIcon";
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const DestinationSection = () => {
  const { section, destinations, banner } = destinationSectionData;

  // Only show first five destinations on home section
  const topDestinations = useMemo(() => {
    return destinations.slice(0, 5);
  }, [destinations]);

  // Combine top destinations and banner for mobile slider
  const allItems = useMemo(() => {
    return [...topDestinations, { ...banner, id: "banner", isBanner: true }];
  }, [topDestinations, banner]);

  // Swiper settings for mobile slider
  const swiperSettings = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);

  return (
    <>
      <div className="home1-destination-section mb-120">
        <img
          src={section.vectorImage}
          alt=""
          className="section-vector2"
        />
        <div className="container">
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
            <Swiper
              {...swiperSettings}
              className="swiper destination-slider"
              style={{ paddingBottom: '50px' }}
            >
              {allItems.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="swiper-slide"
                  style={{ height: '450px' }}
                >
                  {item.isBanner ? (
                    <div className="destination-banner" style={{ height: '100%' }}>
                      <div className="destination-banner-content">
                        <div className="batch">
                          <span>{item.batchText}</span>
                        </div>
                        <h2>{item.heading}</h2>
                        <Link href={item.link} className="primary-btn1">
                          {item.buttonText}
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="destination-card" style={{ height: '100%' }}>
                      <img src={item.image} alt={item.title} style={{ height: '100%', objectFit: 'cover', width: '100%' }} />
                      <div className="overlay" />
                      <div className="card-title">
                        <h4>{item.title}</h4>
                      </div>
                      <div className="content">
                        <h4>
                          <Link href={item.link}>{item.title}</Link>
                        </h4>
                        <div className="eg-tag">
                          <span>{item.title}</span>
                        </div>
                      </div>
                    </div>
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
                  <div className="destination-card">
                    <img src={destination.image} alt={destination.title} />
                    <div className="overlay" />
                    <div className="card-title">
                      <h4>{destination.title}</h4>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href={destination.link}>{destination.title}</Link>
                      </h4>
                      <div className="eg-tag">
                        <span>{destination.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className={banner.colSize}>
                <div className="destination-banner">
                  <div className="destination-banner-content">
                    <div className="batch">
                      <span>{banner.batchText}</span>
                    </div>
                    <h2>{banner.heading}</h2>
                    <Link href={banner.link} className="primary-btn1">
                      {banner.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationSection;
