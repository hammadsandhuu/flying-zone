"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Pagination,
} from "swiper";
import Link from "next/link";
import visaSectionData from "../../data/visaSection.json";
import DecorativeIcon from "../icons/DecorativeIcon";
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const VisaSection = () => {
  const { section, visas } = visaSectionData;

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
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
      <div className="visa-section mb-120">
        <img
          src={section.vectorImage}
          alt=""
          className="section-vector2"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column align-items-center justify-content-center flex-wrap gap-4 mb-60">
              <div className="section-title text-center">
                <span>
                  <DecorativeIcon type="left" />
                  {section.subtitle}
                  <DecorativeIcon type="right" />
                </span>
                <h2>{section.title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper 
                {...settings} 
                className="swiper package-card2-slider"
                style={{ paddingBottom: '50px' }}
              >
                <div className="swiper-wrapper">
                  {visas.map((visa) => (
                    <SwiperSlide key={visa.id} className="swiper-slide">
                      <div className={`package-card2 ${visa.style}`}>
                        <Link href={visa.link}>
                          <img src={visa.image} alt={visa.country} />
                        </Link>
                        <div className="eg-tag">
                          <h4>
                            <Link href={visa.link}>{visa.country}</Link>
                          </h4>
                        </div>
                        <div className="package-card2-content">
                          <div className="title">
                            <h6>{visa.title}</h6>
                          </div>
                          <div className="price-area">
                            <span>{visa.price}</span>
                            <p>{visa.priceLabel}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisaSection;
