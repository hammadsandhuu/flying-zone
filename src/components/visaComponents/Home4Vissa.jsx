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
import visaData from "@/data/visa.json";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home4Vissa = () => {
  const allVisas = [...visaData.uaeVisa, ...visaData.globalVisa];
  
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 25,
      navigation: {
        nextEl: ".package-card4-slider-next",
        prevEl: ".package-card4-slider-prev",
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
          slidesPerView: 1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home4-visa-application-section mb-120">
        <div className="container one">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title5 mb-40">
                <span>
                  Visa Processing
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                  >
                    <g opacity="0.8">
                      <path d="M9.06226 11.3626L8.55838 13.7263L6.22997 20.0004L7.61194 19.7701L14.0678 11.3277C14.979 11.296 15.8626 11.2471 16.6304 11.1713C20.1826 10.82 19.9984 10.0002 19.9984 10.0002C19.9984 10.0002 20.1826 9.18031 16.6304 8.829C15.8626 8.7529 14.9789 8.70407 14.0678 8.67261L7.61197 0.229974L6.22997 -6.01907e-07L8.55838 6.27416L9.06226 8.6378C7.87942 8.6555 7.07898 8.68244 7.07898 8.68244C7.07898 8.68244 5.44724 8.7201 2.92253 9.28895L0.864093 6.43364L-0.000128074 6.43364L0.615287 9.90529C0.504522 9.93924 0.504522 10.0611 0.615287 10.0951L-0.000128385 13.5667L0.864093 13.5667L2.92253 10.7117C5.44724 11.2806 7.07898 11.3177 7.07898 11.3177C7.07898 11.3177 7.87942 11.3449 9.06226 11.3626Z" />
                      <path d="M13.4102 13.2575L13.4102 14.1895L9.96575 14.1895L9.96575 13.2575L13.4102 13.2575ZM13.4102 5.81414L13.4102 6.7458L9.96595 6.7458L9.96595 5.81414L13.4102 5.81414ZM11.0863 16.385L11.0863 17.3167L7.90291 17.3167L7.90291 16.385L11.0863 16.385ZM11.0863 2.68689L11.0863 3.61885L7.90291 3.61885L7.90291 2.68689L11.0863 2.68689Z" />
                    </g>
                  </svg>
                </span>
                <h2>Visa Processing</h2>
              </div>
              <Link href="/visas/uae" className="view-btn">
                View All Visa
                <div className="arrow">
                  <svg
                    width={18}
                    height={16}
                    viewBox="0 0 18 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.73828 11.75L15.6103 4.31833"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13.3477 10.3057L15.6115 4.31789L9.29402 3.28456"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container one">
            <div className="row mb-50">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper package-card4-slider">
                  <div className="swiper-wrapper">
                    {allVisas.map((visa) => (
                      <SwiperSlide key={visa.id} className="swiper-slide">
                        <div className="package-card4">
                          <Link
                            href="/visas/visas-details"
                            className="package-card-img"
                          >
                            <img
                              src={visa.img}
                              alt={visa.title}
                            />
                          </Link>
                          <div className="package-card-content">
                            <div className="card-content-top">
                              <h5>{visa.title}</h5>
                              <ul>
                                <li>
                                  <span>Country :</span> {visa.country}
                                </li>
                                <li>
                                  <span>Visa Type :</span> {visa.visaType}
                                </li>
                                <li>
                                  <span>Visa Mode :</span> {visa.visaMode}
                                </li>
                                <li>
                                  <span>Validity :</span> {visa.validity}
                                </li>
                                <li>
                                  <span>Processing Time :</span> {visa.processingTime}
                                </li>
                              </ul>
                            </div>
                             <div className="card-content-bottom">
                              <Link
                                href="/visas/visas-details"
                                className="apply-btn w-100 justify-content-center"
                              >
                                Apply Now
                                <div className="arrow">
                                  <i className="bi bi-arrow-right" />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="slider-btn-grp5">
                  <div className="slider-btn package-card4-slider-prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={43}
                      height={14}
                      viewBox="0 0 43 14"
                    >
                      <path
                        d="M42 7.18797L1.14917 7.18797M6.8649 13L1 7L6.86491 0.999997"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="slider-btn package-card4-slider-next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={43}
                      height={14}
                      viewBox="0 0 43 14"
                    >
                      <path
                        d="M1 6.81204H41.8508M36.1351 1.00002L42 7.00002L36.1351 13"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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

export default Home4Vissa;
