import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const FlightTicketCard = ({ flight, settings }) => {
  return (
    <div className="room-suits-card mb-30">
      <div className="row g-0">
        <div className="col-12">
          {flight.images.length > 1 ? (
            <Swiper {...settings} className="swiper hotel-img-slider">
              <div className="swiper-wrapper">
                {flight.images.map((img, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="room-img w-100">
                      <img src={img} alt="" className="w-100" style={{ objectFit: "cover", height: "250px" }} />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
              <div className="swiper-pagination5" />
            </Swiper>
          ) : (
            <div className="room-img w-100">
              <Link href={`/services/flight-tickets/${flight.slug}`} className="w-100 d-block">
                <img src={flight.images[0]} alt="" className="w-100" style={{ objectFit: "cover", height: "250px" }} />
              </Link>
            </div>
          )}
        </div>
        <div className="col-12 mt-4 mt-md-0">
          <div className="room-content">
            <div className="content-top">
              <div className="reviews">
                <ul>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-half" /></li>
                </ul>
                <span>{flight.reviewsCount}</span>
              </div>
              <h5>
                <Link href={`/services/flight-tickets/${flight.slug}`}>
                  {flight.title}
                </Link>
              </h5>
              <ul className="loaction-area mb-3">
                <li>
                  <i className="bi bi-geo-alt" />
                  {flight.location}
                </li>
                <li>
                  <a href="#">Show on map</a>
                </li>
                <li>
                  <span>{flight.distance}</span>
                </li>
              </ul>
              
              <p className="mt-3 mb-3 text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                {flight.description}
              </p>
              
              <ul className="facilisis mb-0">
                {flight.features.map((feature, idx) => (
                  <li key={idx} style={{ display: "inline-flex", alignItems: "center" }}>
                    <i className="bi bi-check2-circle text-primary" style={{ marginRight: "6px", fontSize: "16px" }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="content-bottom mt-4">
              <div className="book-btn w-100">
                <Link href={`/services/flight-tickets/${flight.slug}`} className="primary-btn2 w-100 text-center">
                  View Flight Details <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightTicketCard;
