import Link from "next/link";
import React from "react";

const Home4Banner2 = () => {
    return (
        <>
            <div className="home4-banner2-area pb-100">
                <div className="container one">
                    <div className="home4-banner2-wrapper">
                        <div className="swiper home4-banner2-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-lg-4 p-0">
                                            <div className="home4-banner2-content">
                                                <span>Let’s Travel</span>
                                                <h2>
                                                    Honeymoon Tour <br /> <strong>25% Off</strong>
                                                </h2>
                                                <p>
                                                    Whatever your summer looks like, bring yourown heat
                                                    with up to 25% off Lumin Brand.
                                                </p>
                                                <Link href="/package/" className="secondary-btn1">
                                                    Book A Trip
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 p-0">
                                            <div className="home4-banner2-img">
                                                <img
                                                    src="/assets/img/home4/home4-banner2-img1.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-lg-4 p-0">
                                            <div className="home4-banner2-content">
                                                <span>Let’s Travel</span>
                                                <h2>
                                                    Family Tour <br /> <strong>35% Off</strong>
                                                </h2>
                                                <p>
                                                    Whatever your summer looks like, bring yourown heat
                                                    with up to 35% off Lumin Brand.
                                                </p>
                                                <Link href="/package" className="secondary-btn1">
                                                    Book A Trip
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 p-0">
                                            <div className="home4-banner2-img">
                                                <img
                                                    src="/assets/img/home4/home4-banner2-img2.png"
                                                    alt=""
                                                />
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

export default Home4Banner2;
