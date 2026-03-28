import React from "react";
import Link from "next/link";
import LocationMarkerIcon from "../svg/LocationMarkerIcon";
import PlaneIcon from "../svg/PlaneIcon";

const PackageCard = ({
  id,
  img,
  title,
  duration,
  locationList = [],
  placeList = [],
  price,
  originalPrice,
  link,
}) => {



  return (
    <div className="package-card">
      <div className="package-card-img-wrap">
        <Link href={link} className="card-img">
          <img src={img} alt={title} />
        </Link>
        <div className="batch">
          <span className="date">{duration}</span>
          <div className="location">
            <LocationMarkerIcon />
            <ul className="location-list">
              {locationList.map((location, idx) => (
                <li key={idx}>
                  <Link href="/package">{location}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="package-card-content">
        <div className="card-content-top">
          <h5>
            <Link href={link}>{title}</Link>
          </h5>
          <div className="location-area">
            <ul className="location-list scrollTextAni">
              {placeList.map((place, idx) => (
                <li key={idx}>
                  <Link href="/package">{place}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-content-bottom">
          <div className="price-area">
            <h6>Starting Form:</h6>
            <span>
              ${price}
              {originalPrice && <del>${originalPrice}</del>}
            </span>
          </div>
          <Link href={link} className="primary-btn2">
            Book a Trip
            <PlaneIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

