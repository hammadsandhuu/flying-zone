import React from "react";
import whyChooseData from "../../data/whyChoose.json";
import WorldwideCoverageIcon from "../svg/WorldwideCoverageIcon";
import PricingIcon from "../svg/PricingIcon";
import FastBookingIcon from "../svg/FastBookingIcon";
import GuidedToursIcon from "../svg/GuidedToursIcon";
import SupportIcon from "../svg/SupportIcon";
import FlexibilityIcon from "../svg/FlexibilityIcon";
import DecorativeIcon from "../svg/DecorativeIcon";

const Home1WhyChoose = () => {
  const { section, features } = whyChooseData;
  const [worldwide, pricing, fastBooking, guidedTours, support, flexibility] =
    features;

  return (
    <>
      <div className="feature-card-section mb-120 mt-120">
        <img
          src="/assets/img/home1/section-vector4.png"
          alt=""
          className="section-vector4"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-60">
                <span>
                  <DecorativeIcon type="left" />
                  {section.subtitle}
                  <DecorativeIcon type="right" />
                </span>
                <h2>{section.title}</h2>
              </div>
            </div>
          </div>
          <div className="row g-md-4 gy-5">
            <div className="col-xl-4 col-md-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <WorldwideCoverageIcon />
                </div>
                <div className="feature-card-content">
                  <h6>{worldwide.title}</h6>
                  <p>{worldwide.description}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-card two">
                <div className="feature-card-icon">
                  <PricingIcon />
                </div>
                <div className="feature-card-content">
                  <h6>{pricing.title}</h6>
                  <p>{pricing.description}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-card three">
                <div className="feature-card-icon">
                  <FastBookingIcon />
                </div>
                <div className="feature-card-content">
                  <h6>{fastBooking.title}</h6>
                  <p>{fastBooking.description}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-card three">
                <div className="feature-card-icon">
                  <GuidedToursIcon />
                </div>
                <div className="feature-card-content">
                  <h6>{guidedTours.title}</h6>
                  <p>{guidedTours.description}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <SupportIcon />
                </div>
                <div className="feature-card-content">
                  <h6>{support.title}</h6>
                  <p>{support.description}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-card two">
                <div className="feature-card-icon">
                  <FlexibilityIcon />
                </div>
                <div className="feature-card-content">
                  <h6>{flexibility.title}</h6>
                  <p>{flexibility.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1WhyChoose;
