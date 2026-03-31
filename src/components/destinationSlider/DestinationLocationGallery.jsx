"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const DestinationLocationGallery = ({ title, locations }) => {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
    currentTabImages: []
  });

  // Fallback data if no locations are provided
  const displayLocations = locations || [
    {
      id: "loc1",
      name: "City Highlights",
      images: [
        "/assets/img/innerpage/gallery-01.jpg",
        "/assets/img/innerpage/gallery-02.jpg",
        "/assets/img/innerpage/gallery-03.jpg",
        "/assets/img/innerpage/gallery-04.jpg",
        "/assets/img/innerpage/gallery-05.jpg",
        "/assets/img/innerpage/gallery-06.jpg"
      ]
    }
  ];

  return (
    <>
      <div className="destination-location-gallery mb-120">
        <div className="container one">
          <div className="row">
            <div className="col-lg-12">
              <h3>{title} City Location.</h3>
            </div>
            <div className="col-lg-12 mb-60">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                {displayLocations.map((loc, index) => (
                  <li key={loc.id} className="nav-item" role="presentation">
                    <button 
                      className={`nav-link ${index === 0 ? "active" : ""}`} 
                      id={`${loc.id}-tab`} 
                      data-bs-toggle="pill" 
                      data-bs-target={`#${loc.id}`} 
                      type="button" 
                      role="tab" 
                      aria-controls={loc.id} 
                      aria-selected={index === 0}
                    >
                      {loc.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="pills-tabContent">
                {displayLocations.map((loc, locIndex) => (
                  <div 
                    key={loc.id} 
                    className={`tab-pane fade ${locIndex === 0 ? "show active" : ""}`} 
                    id={loc.id} 
                    role="tabpanel"
                  >
                    <div className="destination-gallery">
                      <div className="row g-4">
                        {loc.images.map((img, imgIndex) => (
                          <div key={imgIndex} className={imgIndex === 1 || imgIndex === 5 ? "col-lg-5 col-sm-6" : imgIndex === 2 || imgIndex === 3 ? "col-lg-3 col-sm-6" : "col-lg-4 col-sm-6"}>
                            <div className="gallery-img-wrap">
                              <img src={img} alt={`${loc.name} ${imgIndex}`} />
                              <a 
                                data-fancybox="gallery-01" 
                                onClick={() => setOpenimg({ 
                                  openingState: true, 
                                  openingIndex: imgIndex,
                                  currentTabImages: loc.images
                                })}
                                style={{ cursor: 'pointer' }}
                              >
                                <i className="bi bi-eye" /> Discover {loc.name}
                              </a>
                            </div>
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
      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg({ ...isOpenimg, openingState: false })}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={isOpenimg.currentTabImages.map((src) => ({ src }))}
      />
    </>
  );
};

export default DestinationLocationGallery;
