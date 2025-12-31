"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import visaData from "@/data/visa.json";

const VisasPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Combine all visa packages (both Global and UAE)
  const allVisas = [
    ...visaData.globalVisa.map(visa => ({ ...visa, type: 'global' })),
    ...visaData.uaeVisa.map(visa => ({ ...visa, type: 'uae' }))
  ];

  // Filter visas based on active tab
  const filteredVisas = activeTab === "all" 
    ? allVisas 
    : allVisas.filter(visa => visa.type === activeTab);

  // Add active state styling
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
      .visa-page-title {
        color: var(--title-color) !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Breadcrumb pagename="Visa" pagetitle="Visa" />
      
      <div className="visa-with-sidebar-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            {/* Left Content Area */}
            <div className="col-lg-8">
              <div className="package-inner-title-section mb-40">
                <p>Showing {filteredVisas.length} of {allVisas.length} results</p>
                <div className="selector-and-grid">
                  <ul className="grid-view">
                    <li className="grid">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                      >
                        <mask
                          id="mask0_1631_19"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={14}
                          height={14}
                        >
                          <rect width={14} height={14} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1631_19)">
                          <path d="M5.47853 6.08726H0.608726C0.272536 6.08726 0 5.81472 0 5.47853V0.608726C0 0.272536 0.272536 0 0.608726 0H5.47853C5.81472 0 6.08726 0.272536 6.08726 0.608726V5.47853C6.08726 5.81472 5.81472 6.08726 5.47853 6.08726Z" />
                          <path d="M13.3911 6.08726H8.52132C8.18513 6.08726 7.9126 5.81472 7.9126 5.47853V0.608726C7.9126 0.272536 8.18513 0 8.52132 0H13.3911C13.7273 0 13.9999 0.272536 13.9999 0.608726V5.47853C13.9999 5.81472 13.7273 6.08726 13.3911 6.08726Z" />
                          <path d="M5.47853 14.0013H0.608726C0.272536 14.0013 0 13.7288 0 13.3926V8.52279C0 8.1866 0.272536 7.91406 0.608726 7.91406H5.47853C5.81472 7.91406 6.08726 8.1866 6.08726 8.52279V13.3926C6.08726 13.7288 5.81472 14.0013 5.47853 14.0013Z" />
                          <path d="M13.3916 14.0013H8.52181C8.18562 14.0013 7.91309 13.7288 7.91309 13.3926V8.52279C7.91309 8.1866 8.18562 7.91406 8.52181 7.91406H13.3916C13.7278 7.91406 14.0003 8.1866 14.0003 8.52279V13.3926C14.0003 13.7288 13.7278 14.0013 13.3916 14.0013Z" />
                        </g>
                      </svg>
                    </li>
                    <li className="lists active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                      >
                        <mask
                          id="mask0_1631_3"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={14}
                          height={14}
                        >
                          <rect width={14} height={14} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1631_3)">
                          <path d="M1.21747 2C0.545203 2 0 2.55848 0 3.24765C0 3.93632 0.545203 4.49433 1.21747 4.49433C1.88974 4.49433 2.43494 3.93632 2.43494 3.24765C2.43494 2.55848 1.88974 2 1.21747 2Z" />
                          <path d="M1.21747 5.75195C0.545203 5.75195 0 6.30996 0 6.99913C0 7.68781 0.545203 8.24628 1.21747 8.24628C1.88974 8.24628 2.43494 7.68781 2.43494 6.99913C2.43494 6.30996 1.88974 5.75195 1.21747 5.75195Z" />
                          <path d="M1.21747 9.50586C0.545203 9.50586 0 10.0643 0 10.753C0 11.4417 0.545203 12.0002 1.21747 12.0002C1.88974 12.0002 2.43494 11.4417 2.43494 10.753C2.43494 10.0643 1.88974 9.50586 1.21747 9.50586Z" />
                          <path d="M13.0845 2.31055H4.42429C3.91874 2.31055 3.50879 2.7305 3.50879 3.24886C3.50879 3.76677 3.91871 4.1867 4.42429 4.1867H13.0845C13.59 4.1867 14 3.76677 14 3.24886C14 2.7305 13.59 2.31055 13.0845 2.31055Z" />
                          <path d="M13.0845 6.06055H4.42429C3.91874 6.06055 3.50879 6.48047 3.50879 6.99886C3.50879 7.51677 3.91871 7.9367 4.42429 7.9367H13.0845C13.59 7.9367 14 7.51677 14 6.99886C14 6.48047 13.59 6.06055 13.0845 6.06055Z" />
                          <path d="M13.0845 9.81348H4.42429C3.91874 9.81348 3.50879 10.2334 3.50879 10.7513C3.50879 11.2692 3.91871 11.6891 4.42429 11.6891H13.0845C13.59 11.6891 14 11.2692 14 10.7513C14 10.2334 13.59 9.81348 13.0845 9.81348Z" />
                        </g>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="list-grid-product-wrap mb-70">
                <div className="row gy-4">
                  {filteredVisas.map((visa) => (
                    <div key={`${visa.type}-${visa.id}`} className="col-md-12 item">
                      <div className="package-card4 four">
                        <Link
                          href="/visas/visas-details"
                          className="package-card-img"
                        >
                          <img src={visa.img} alt={visa.title} />
                        </Link>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              <Link href="/visas/visas-details">
                                {visa.title}
                              </Link>
                            </h5>
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
                            <div className="price-area">
                              <span>Starting Form:</span>
                              <h6>
                                <strong>$</strong>{visa.price} <span>Per Person</span>
                              </h6>
                            </div>
                            <Link href="/visas/visas-details" className="apply-btn">
                              Apply Now
                              <div className="arrow">
                                <i className="bi bi-arrow-right" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <nav className="inner-pagination-area">
                    <ul className="pagination-list">
                      <li>
                        <a href="#" className="shop-pagi-btn">
                          <i className="bi bi-chevron-left" />
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#" className="active">
                          2
                        </a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-three-dots" />
                        </a>
                      </li>
                      <li>
                        <a href="#">6</a>
                      </li>
                      <li>
                        <a href="#" className="shop-pagi-btn">
                          <i className="bi bi-chevron-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
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
                        All Visas
                        <span>{allVisas.length}</span>
                      </Link>
                    </li>
                    <li 
                      className={activeTab === "global" ? "active" : ""}
                    >
                      <Link 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("global");
                        }}
                        style={activeTab === "global" ? {
                          color: "var(--primary-color1)",
                          fontWeight: "500"
                        } : {}}
                      >
                        Global Visa
                        <span>{visaData.globalVisa.length}</span>
                      </Link>
                    </li>
                    <li 
                      className={activeTab === "uae" ? "active" : ""}
                    >
                      <Link 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("uae");
                        }}
                        style={activeTab === "uae" ? {
                          color: "var(--primary-color1)",
                          fontWeight: "500"
                        } : {}}
                      >
                        UAE Visa
                        <span>{visaData.uaeVisa.length}</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* FAQ Section */}
                <h5 className="widget-title mb-30">
                  FAQ - General Visa Information:
                </h5>
                <div className="faq-content mb-50">
                  <div className="accordion" id="accordionTravel">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="true"
                          aria-controls="travelcollapseOne"
                        >
                          01. Can I fill in my visa application in a language
                          other than English?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="travelheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          No. At Present our online application system only
                          supports applications made in English.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseTwo"
                          aria-expanded="false"
                          aria-controls="travelcollapseTwo"
                        >
                          02. Will I be able to access the online application
                          system using my computer?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We are doing our best to support as many computers,
                          operating systems and internet browsers as possible
                          but due to the technologies we use for our online
                          application system, there are certain browsers we
                          exclude due to their age or design. Currently our site
                          is tested at IE 5.0 or later and Mozilla Firefox 3.5
                          or later.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseThree"
                          aria-expanded="false"
                          aria-controls="travelcollapseThree"
                        >
                          03. Can I save my application mid-way through the
                          application process?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Yes. You can save your online visa application
                          wherever you see the "Save &amp; Exit" icon. To login
                          again and complete your application, you will require
                          your unique "Visa Application Id". This number will
                          have been sent to the email address that you supplied
                          in your application security details.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseFour"
                          aria-expanded="false"
                          aria-controls="travelcollapseFour"
                        >
                          04. I do not understand one of the questions. What can
                          I do?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Throughout the online form we have added "More Info"
                          icons to some questions that might require further
                          guidance.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseFive"
                          aria-expanded="false"
                          aria-controls="travelcollapseFive"
                        >
                          05. I made a mistake on one of my answers. Can I
                          change it?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          If you didn't submit your application finally you can
                          do the change. After submitting the application you
                          can't change it.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseSix"
                          aria-expanded="false"
                          aria-controls="travelcollapseSix"
                        >
                          06. The date I entered is not being accepted. What is
                          the correct format?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingSix"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          All date fields in our forms are set up in the
                          following format: dd/mm/yyyy (for example 21/08/2011).
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingSevene">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseSevene"
                          aria-expanded="false"
                          aria-controls="travelcollapseSevene"
                        >
                          07. I have not received my Completed Application
                          confirmation email. Can you resend it to me?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseSevene"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingSevene"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Yes. But please check first that your inbox has not
                          treated our email confirmation as SPAM and that you
                          have given us the correct email address. If you have
                          not received your confirmation email after 24 hours
                          please contact us through Complain and Feedback link.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingEight">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseEight"
                          aria-expanded="false"
                          aria-controls="travelcollapseEight"
                        >
                          08. I am unable to retrieve my application. What can I
                          do?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingEight"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          This could be because you did not save your
                          application by selecting the "Save &amp; Exit" option
                          flagged by the following image on the application form
                          or your did not retrieve your application within 7
                          days of last saving it. If you are sure you saved your
                          application in the last seven days, empty your browser
                          cache(temporary internet files) and try again.
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
    </>
  );
};

export default VisasPage;
