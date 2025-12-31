"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import umrahData from "@/data/umrah.json";

const UmrahPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Combine all Umrah packages (both Air and Bus)
  const allUmrahPackages = [
    ...umrahData.umrahByAir.map(pkg => ({ ...pkg, type: 'air' })),
    ...umrahData.umrahByBus.map(pkg => ({ ...pkg, type: 'bus' }))
  ];

  // Filter packages based on active tab
  const filteredPackages = activeTab === "all" 
    ? allUmrahPackages 
    : allUmrahPackages.filter(pkg => pkg.type === activeTab);

  // Add active state styling and heading font size
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .sidebar-area .category-list li.active::before {
        background-color: var(--primary-color1) !important;
        border-color: var(--primary-color1) !important;
      }
      .sidebar-area .category-list li.active a {
        color: var(--primary-color1) !important;
        font-weight: 500 !important;
      }
      @media (min-width: 992px) {
        .umrah-page-title {
          font-size: 28px !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Umrah" pagetitle="Umrah Packages" />
      
      {/* All Umrah Packages Section */}
      <div className="package-grid-with-sidebar-section pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="package-inner-title-section mb-40">
                <h2 className="mb-3 umrah-page-title">Umrah Packages</h2>
                <p>Explore our complete range of Umrah packages by Air and Bus</p>
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            {/* Left Content Area */}
            <div className="col-lg-8">
              <div className="list-grid-product-wrap mb-70">
                <div className="row gy-4">
                  {filteredPackages.map((packageItem) => (
                    <div key={`${packageItem.type}-${packageItem.id}`} className="col-md-6 col-lg-4 item">
                      <div className="package-card">
                        <div className="package-card-img-wrap">
                          <Link
                            href={`/umrah/by-${packageItem.type}/${packageItem.slug}`}
                            className="card-img"
                          >
                            <img src={packageItem.img} alt={packageItem.title} />
                          </Link>
                          <div className="batch">
                            <span className="date">{packageItem.batch}</span>
                            <div className="location">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                              >
                                <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                              </svg>
                              <ul className="location-list">
                                {packageItem.location_list.map((location, index) => (
                                  <li key={index}>
                                    <Link href="/umrah">{location}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              <Link href={`/umrah/by-${packageItem.type}/${packageItem.slug}`}>
                                {packageItem.title}
                              </Link>
                            </h5>
                            <div className="location-area">
                              <ul className="location-list scrollTextAni">
                                {packageItem.place_list.map((place, index) => (
                                  <li key={index}>
                                    <Link href="/umrah">{place}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="card-content-bottom" style={{ flexDirection: "column", alignItems: "stretch" }}>
                            <div className="price-area mb-3" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              <h6 style={{ marginBottom: 0 }}>Starting Form:</h6>
                              <span style={{ fontSize: "18px", fontWeight: "600" }}>${packageItem.price}</span>
                            </div>
                            <Link
                              href={`/umrah/by-${packageItem.type}/${packageItem.slug}`}
                              className="primary-btn2"
                              style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                            >
                              Book a Trip
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                                <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar-area">
                {/* Filter Widget */}
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Filter by Type</h5>
                  <ul className="category-list">
                    <li 
                      className={activeTab === "all" ? "active" : ""}
                    >
                      <Link 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("all");
                        }}
                        style={activeTab === "all" ? {
                          color: "var(--primary-color1)",
                          fontWeight: "500"
                        } : {}}
                      >
                        All Packages
                        <span>{allUmrahPackages.length}</span>
                      </Link>
                    </li>
                    <li 
                      className={activeTab === "air" ? "active" : ""}
                    >
                      <Link 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("air");
                        }}
                        style={activeTab === "air" ? {
                          color: "var(--primary-color1)",
                          fontWeight: "500"
                        } : {}}
                      >
                        Umrah by Air
                        <span>{umrahData.umrahByAir.length}</span>
                      </Link>
                    </li>
                    <li 
                      className={activeTab === "bus" ? "active" : ""}
                    >
                      <Link 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("bus");
                        }}
                        style={activeTab === "bus" ? {
                          color: "var(--primary-color1)",
                          fontWeight: "500"
                        } : {}}
                      >
                        Umrah by Bus
                        <span>{umrahData.umrahByBus.length}</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* FAQ Section */}
                <h5 className="widget-title mb-30">
                  FAQ - General Umrah Information:
                </h5>
                <div className="faq-content mb-50">
                  <div className="accordion" id="accordionUmrah">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="umrahheadingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#umrahcollapseOne"
                          aria-expanded="true"
                          aria-controls="umrahcollapseOne"
                        >
                          01. What is Umrah and how is it different from Hajj?
                        </button>
                      </h2>
                      <div
                        id="umrahcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="umrahheadingOne"
                        data-bs-parent="#accordionUmrah"
                      >
                        <div className="accordion-body">
                          Umrah is a pilgrimage to Mecca that can be performed at any time of the year, unlike Hajj which has specific dates. Umrah involves performing Tawaf (circumambulation) around the Kaaba and Sa'i (walking) between Safa and Marwah hills.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="umrahheadingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#umrahcollapseTwo"
                          aria-expanded="false"
                          aria-controls="umrahcollapseTwo"
                        >
                          02. What documents do I need for Umrah?
                        </button>
                      </h2>
                      <div
                        id="umrahcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="umrahheadingTwo"
                        data-bs-parent="#accordionUmrah"
                      >
                        <div className="accordion-body">
                          You will need a valid passport with at least 6 months validity, a valid Umrah visa, proof of vaccination (as required), and travel insurance. Make sure all documents are in order before departure.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="umrahheadingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#umrahcollapseThree"
                          aria-expanded="false"
                          aria-controls="umrahcollapseThree"
                        >
                          03. How long does an Umrah package typically last?
                        </button>
                      </h2>
                      <div
                        id="umrahcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="umrahheadingThree"
                        data-bs-parent="#accordionUmrah"
                      >
                        <div className="accordion-body">
                          Umrah packages typically range from 7 to 15 days, depending on the package you choose. This includes travel time, accommodation, and the time needed to perform Umrah rituals.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="umrahheadingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#umrahcollapseFour"
                          aria-expanded="false"
                          aria-controls="umrahcollapseFour"
                        >
                          04. What is included in the Umrah package?
                        </button>
                      </h2>
                      <div
                        id="umrahcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="umrahheadingFour"
                        data-bs-parent="#accordionUmrah"
                      >
                        <div className="accordion-body">
                          Our Umrah packages typically include round-trip flights (for air packages), accommodation near the Haram, transportation, meals, visa processing assistance, and guidance throughout your journey. Please check individual package details for specific inclusions.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="umrahheadingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#umrahcollapseFive"
                          aria-expanded="false"
                          aria-controls="umrahcollapseFive"
                        >
                          05. Can I perform Umrah during any time of the year?
                        </button>
                      </h2>
                      <div
                        id="umrahcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="umrahheadingFive"
                        data-bs-parent="#accordionUmrah"
                      >
                        <div className="accordion-body">
                          Yes, Umrah can be performed at any time of the year except during the Hajj period. However, it's important to note that certain times may be more crowded, and prices may vary based on the season.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="umrahheadingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#umrahcollapseSix"
                          aria-expanded="false"
                          aria-controls="umrahcollapseSix"
                        >
                          06. What is the difference between Umrah by Air and Umrah by Bus?
                        </button>
                      </h2>
                      <div
                        id="umrahcollapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="umrahheadingSix"
                        data-bs-parent="#accordionUmrah"
                      >
                        <div className="accordion-body">
                          Umrah by Air packages include round-trip flights, making the journey faster and more comfortable. Umrah by Bus packages use bus transportation, which is more economical but takes longer. Both packages include accommodation and other services.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="umrahheadingSeven">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#umrahcollapseSeven"
                          aria-expanded="false"
                          aria-controls="umrahcollapseSeven"
                        >
                          07. Do I need a guide for Umrah?
                        </button>
                      </h2>
                      <div
                        id="umrahcollapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="umrahheadingSeven"
                        data-bs-parent="#accordionUmrah"
                      >
                        <div className="accordion-body">
                          While it's not mandatory, having a knowledgeable guide can be very helpful, especially for first-time pilgrims. Our packages include guidance and support throughout your Umrah journey to ensure you perform all rituals correctly.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="umrahheadingEight">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#umrahcollapseEight"
                          aria-expanded="false"
                          aria-controls="umrahcollapseEight"
                        >
                          08. What should I pack for Umrah?
                        </button>
                      </h2>
                      <div
                        id="umrahcollapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="umrahheadingEight"
                        data-bs-parent="#accordionUmrah"
                      >
                        <div className="accordion-body">
                          Pack comfortable, modest clothing suitable for hot weather, Ihram garments (for men), comfortable walking shoes, personal hygiene items, prayer mat, copies of important documents, and any necessary medications. Avoid overpacking as you'll need to move between locations.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner2-card">
                  <img src="/assets/img/innerpage/support-img.jpg" alt="" />
                  <div className="banner2-content-wrap">
                    <div className="banner2-content">
                      <div className="hotline-area">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 28 28"
                          >
                            <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z" />
                            <path d="M15.865 7.46746C18.6983 7.4708 20.9943 9.76678 20.9976 12.6001C20.9976 12.7238 21.0468 12.8425 21.1343 12.93C21.2218 13.0175 21.3404 13.0666 21.4642 13.0666C21.5879 13.0666 21.7066 13.0175 21.7941 12.93C21.8816 12.8425 21.9308 12.7238 21.9308 12.6001C21.9269 9.2516 19.2134 6.53813 15.865 6.5343C15.6073 6.5343 15.3984 6.74318 15.3984 7.00088C15.3984 7.25859 15.6073 7.46746 15.865 7.46746Z" />
                            <path d="M15.865 10.267C17.1528 10.2686 18.1964 11.3122 18.198 12.6C18.198 12.7238 18.2472 12.8424 18.3347 12.9299C18.4222 13.0174 18.5409 13.0666 18.6646 13.0666C18.7883 13.0666 18.907 13.0174 18.9945 12.9299C19.082 12.8424 19.1312 12.7238 19.1312 12.6C19.1291 10.797 17.668 9.33589 15.865 9.33386C15.6073 9.33386 15.3984 9.54274 15.3984 9.80044C15.3984 10.0581 15.6073 10.267 15.865 10.267Z" />
                          </svg>
                        </div>
                        <div className="content">
                          <span>To More Inquiry</span>
                          <h6>
                            <a href="tel:+990737621432">+971 56 722 1458</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newslatter />
      <Footer />
    </>
  );
};

export default UmrahPage;

