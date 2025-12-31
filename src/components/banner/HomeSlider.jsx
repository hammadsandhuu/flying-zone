"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import banner1Data from "../../data/banner1.json";
import { LocationPinIcon, TripadvisorLogoIcon } from "../common/SvgIcons";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const HomeSlider = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2500,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".home1-banner-next",
        prevEl: ".home1-banner-prev",
      },
    };
  }, []);
  return (
    <>
      <div className="home1-banner-area">
        <div className="container-fluid">
          <Swiper {...settings} className="swiper home1-banner-slider">
            <div className="swiper-wrapper">
              {banner1Data.map((slide) => {
                const HeadingTag = slide.headingTag || "h1";
                return (
                  <SwiperSlide key={slide.id} className="swiper-slide">
                    <div
                      className="home1-banner-wrapper"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(${slide.backgroundImage})`,
                      }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="home1-banner-content">
                              <div className="eg-tag">
                                <span>
                                  <LocationPinIcon width={18} height={18} />
                                  {slide.location}
                                </span>
                              </div>
                              <HeadingTag>{slide.heading}</HeadingTag>
                              <p>{slide.description}</p>
                              <div className="banner-content-bottom">
                                <Link href={slide.buttonUrl} className="primary-btn1">
                                  {slide.buttonText}
                                </Link>
                                <div className="rating-area">
                                  <div className="icon">
                                    <img
                                      src="/assets/img/home1/icon/tripadvisor-logo.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="content">
                                    <div className="text-logo">
                                      <TripadvisorLogoIcon width={110} height={19} />
                                    </div>
                                    <div className="rating">
                                      <ul>
                                        <li>
                                          <i className="bi bi-circle-fill" />
                                        </li>
                                        <li>
                                          <i className="bi bi-circle-fill" />
                                        </li>
                                        <li>
                                          <i className="bi bi-circle-fill" />
                                        </li>
                                        <li>
                                          <i className="bi bi-circle-fill" />
                                        </li>
                                        <li>
                                          <i className="bi bi-circle-half" />
                                        </li>
                                      </ul>
                                      <span>{slide.rating}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
          <div className="slider-btn-grp">
            <div className="slider-btn home1-banner-prev">
              <i className="bi bi-arrow-left" />
            </div>
            <div className="slider-btn home1-banner-next">
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
