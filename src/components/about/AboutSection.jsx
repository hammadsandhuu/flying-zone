"use client";
import Link from "next/link";
import CountUp from "react-countup";
import {
  AboutDecorativeIconLeft,
  AboutDecorativeIconRight,
  MissionVisionIcon,
  FocusOnCustomerIcon,
} from "../common/SvgIcons";

const AboutSection = () => {
  return (
    <>
      <div className="home1-about-section mb-120">
        <img
          src="/assets/img/home1/section-vector1.png"
          alt=""
          className="section-vector1"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-40">
                  <span>
                    <AboutDecorativeIconLeft width={15} height={16} />
                    About Us
                    <AboutDecorativeIconRight width={15} height={16} />
                  </span>
                  <h2>Let's know About Our Journey For Flying-Zone.</h2>
                </div>
                <ul className="nav nav-pills" id="pills-tab3" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="mission-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#mission"
                      type="button"
                      role="tab"
                      aria-controls="mission"
                      aria-selected="true"
                    >
                      <MissionVisionIcon width={30} height={30} />
                      Mission &amp; Vision
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="focus-customer-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#focus-customer"
                      type="button"
                      role="tab"
                      aria-controls="focus-customer"
                      aria-selected="false"
                    >
                      <FocusOnCustomerIcon width={30} height={30} />
                      Focus On Customer
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tab3Content">
                  <div
                    className="tab-pane fade show active"
                    id="mission"
                    role="tabpanel"
                  >
                    Etiam ac tortor id purus commodo vulputate. Vestibulum
                    porttitor erat felis and sed vehicula tortor malesuada
                    gravida. Mauris volutpat enim quis pulv gont congue.
                    Suspendisse ullamcorper, enim vitae tristique blandit,
                    eratot augue torel tempo libero, non porta lectus tortor et
                    elit. Quisque finibusot enim et eratourgt gravida, eu
                    elementum turpis lacinia. Integer female go tellus ligula,
                    attendora and condimentum.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="focus-customer"
                    role="tabpanel"
                  >
                    Etiam ac tortor id purus commodo vulputate. Vestibulum
                    porttitor erat felis and sed vehicula tortor malesuada
                    gravida. Mauris volutpat enim quis pulv gont congue.
                    Suspendisse ullamcorper, enim vitae tristique blandit,
                    eratot augue torel tempo libero, non porta lectus tortor et
                    elit. Quisque finibusot enim et eratourgt gravida, eu
                    elementum turpis lacinia. Integer female go tellus ligula,
                    attendora and condimentum.
                  </div>
                </div>
                <div className="about-content-bottom">
                  <Link href="/about" className="primary-btn1">
                    More About
                  </Link>
                  <div className="counter-area">
                    <div className="customer-img-grp">
                      <img src="/assets/img/home1/customer-img-grp.png" alt="" />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h6 className="counter">
                          <CountUp delay={2} end={500} />
                        </h6>
                        <span>+</span>
                      </div>
                      <p>Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <div className="about-img">
                <img src="/assets/img/home1/about-img.png" alt="" />
                <img
                  src="/assets/img/home1//vector/about-img-bg-vector.svg"
                  alt=""
                  className="vector"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
