import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import React from "react";
import destinationSectionData from "@/data/destinationSection.json";

const page = () => {
  const { destinations } = destinationSectionData;

  return (
    <>
      <Breadcrumb pagename="destination" pagetitle="Destination" />
      <div className="destination-gallery-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-70">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="col-lg-4 col-sm-6"
              >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
