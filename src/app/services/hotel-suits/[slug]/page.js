"use client";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import { roomData } from "@/data/hotelSuitsData";
import PackageGallery from "@/components/packageDetail/PackageGallery";
import PackageItinerary from "@/components/packageDetail/PackageItinerary";
import PackageBookingForm from "@/components/packageDetail/PackageBookingForm";

const HotelSuitsDetailPage = () => {
  const params = useParams();
  const slug = params.slug;

  const packageItem = useMemo(() => {
    return roomData.find((room) => room.slug === slug);
  }, [slug]);

  if (!packageItem) {
    return (
      <>
        <Breadcrumb pagename="Hotel Not Found" pagetitle="Hotel Not Found" />
        <div className="package-details-area pt-120 mb-120">
          <div className="container text-center">
            <h2>Hotel Not Found</h2>
            <p>The accommodation you are looking for does not exist or has been moved.</p>
            <Link href="/services/hotel-suits" className="primary-btn1">
              Back to Hotels & Suits
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb pagename={packageItem.title} pagetitle="Hotel Details" bgImage={packageItem.img || packageItem.images?.[0] || "/assets/img/innerpage/inner-banner-bg.png"} />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container one">
          <div className="row">
            <div className="col-lg-12">
              <PackageGallery
                mainImage={packageItem.img}
                title={packageItem.title}
                gallery={packageItem.gallery}
                videoUrl={packageItem.videoUrl}
              />
            </div>
          </div>

          <div className="row g-xl-4 gy-5">
            <div className="col-xl-8">
              <h2>{packageItem.title}</h2>
              <ul className="tour-info-metalist">
                <li>
                  <i className="bi bi-clock" style={{ fontSize: '1.2rem', marginRight: '8px' }}></i>
                  {packageItem.duration}
                </li>
                <li>
                  <i className="bi bi-geo-alt" style={{ fontSize: '1.2rem', marginRight: '8px' }}></i>
                  Location: {packageItem.locations.join(" & ")}
                </li>
              </ul>
              <p className="mt-4">{packageItem.description}</p>

              <h4>Inclusions</h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                  {packageItem.inclusions.map((item, index) => (
                    <li key={index}><i className="bi bi-check-lg" /> {item}</li>
                  ))}
                </ul>
                <ul className="exclud">
                  {packageItem.exclusions.map((item, index) => (
                    <li key={index}><i className="bi bi-x-lg" /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="highlight-tour mb-20">
                <h4>Hotel Highlights</h4>
                <ul>
                  {packageItem.highlights.map((item, index) => (
                    <li key={index}>
                      <span><i className="bi bi-stars" /></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <PackageItinerary itinerary={packageItem.itinerary} title="Stay Outline" />
            </div>

            <div className="col-xl-4">
              <PackageBookingForm
                title="Book Your Room"
                subtitle="Reserve your exceptional stay today. Contact us to verify room availability."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelSuitsDetailPage;
