"use client";
import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import facilitySectionData from "../../data/facilitySection.json";
import toursData from "../../data/tours.json";
import umrahData from "../../data/umrah.json";
import PackageCard from "./PackageCard";
import TourIcon from "../icons/TourIcon";
import HotelIcon from "../icons/HotelIcon";
import DecorativeIcon from "../icons/DecorativeIcon";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const FacilitySection = () => {
  const { section, filters } = facilitySectionData;
  const [activeFilter, setActiveFilter] = useState("tour");

  // Combine all Umrah packages (both Air and Bus)
  const allUmrahPackages = useMemo(() => {
    return [
      ...umrahData.umrahByAir.map((pkg) => ({ ...pkg, type: "air" })),
      ...umrahData.umrahByBus.map((pkg) => ({ ...pkg, type: "bus" })),
    ];
  }, []);

  // Get data for a specific filter
  const getDataForFilter = (filterId) => {
    return filterId === "tour" ? toursData.tours : allUmrahPackages;
  };

  // Swiper settings for mobile slider
  const getSwiperSettings = (filterId) => {
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
  };

  return (
    <>
      <div className="tour-facilites-section mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column align-items-center justify-content-between flex-wrap gap-4 mb-60">
              <div className="section-title text-center">
                <span>
                  <DecorativeIcon type="left" />
                  {section.subtitle}
                  <DecorativeIcon type="right" />
                </span>
                <h2>{section.title}</h2>
              </div>
              <ul className="nav nav-tabs" id="facilitesTab" role="tablist">
                {filters.map((filter) => (
                  <li key={filter.id} className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeFilter === filter.id ? "active" : ""
                      }`}
                      id={`${filter.tabId}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${filter.tabId}`}
                      type="button"
                      role="tab"
                      aria-controls={filter.ariaControls}
                      aria-selected={activeFilter === filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                    >
                      {filter.id === "tour" ? <TourIcon /> : <HotelIcon />}
                      {filter.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="facilitesTabContent">
                {filters.map((filter) => (
                  <div
                    key={filter.id}
                    className={`tab-pane fade ${
                      activeFilter === filter.id ? "show active" : ""
                    }`}
                    id={filter.tabId}
                    role="tabpanel"
                    aria-labelledby={`${filter.tabId}-tab`}
                  >
                    {/* Mobile Slider */}
                    <div className="d-md-none">
                      {activeFilter === filter.id && (
                        <Swiper
                          {...getSwiperSettings(filter.id)}
                          className="swiper facility-slider"
                          style={{ paddingBottom: '50px' }}
                        >
                          {getDataForFilter(filter.id).map((item) => (
                            <SwiperSlide key={item.id} className="swiper-slide">
                              <PackageCard
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                duration={filter.id === "tour" ? item.duration || item.batch : item.batch}
                                locationList={item.location_list || []}
                                placeList={item.place_list || []}
                                price={item.price}
                                originalPrice={item.originalPrice}
                                link={filter.id === "tour" ? `/tours/package-details/${item.slug}` : `/umrah/${item.type === "air" ? "by-air" : "by-bus"}/${item.slug}`}
                              />
                            </SwiperSlide>
                          ))}
                          <div className="swiper-pagination"></div>
                        </Swiper>
                      )}
                    </div>
                    {/* Desktop Grid */}
                    <div className="d-none d-md-block">
                      <div className="row g-4">
                        {activeFilter === filter.id && getDataForFilter(filter.id).map((item) => (
                          <div key={item.id} className="col-lg-4 col-md-6">
                            <PackageCard
                              id={item.id}
                              img={item.img}
                              title={item.title}
                              duration={filter.id === "tour" ? item.duration || item.batch : item.batch}
                              locationList={item.location_list || []}
                              placeList={item.place_list || []}
                              price={item.price}
                              originalPrice={item.originalPrice}
                              link={filter.id === "tour" ? `/tours/package-details/${item.slug}` : `/umrah/${item.type === "air" ? "by-air" : "by-bus"}/${item.slug}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilitySection;
