"use client";
import React, { useMemo, useState } from "react";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Link from "next/link";
import { home3BannerData } from "@/data/home-slider-data";
import PlaneIcon from "@/components/svg/PlaneIcon";
import VideoIcon from "@/components/svg/VideoIcon";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home3Banner = () => {
    const [isOpen, setOpen] = useState(false);
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 25,
            effect: "fade",
            loop: true,
            fadeEffect: {
                crossFade: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".progress-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".home3-banner-next",
                prevEl: ".home3-banner-prev",
            },
        };
    }, []);

    const bannerBackgroundStyle = (imageUrl) => ({
        backgroundImage: `linear-gradient(180deg, rgba(16, 12, 8, 0.6) 0%, rgba(16, 12, 8, 0.6) 100%), url(${imageUrl})`,
    });

    return (
        <>
            <div className="home3-banner-area">
                <Swiper {...settings} className="swiper home3-banner-slider">
                    <div className="swiper-wrapper">
                        {home3BannerData.map((item) => {
                            return (
                                <SwiperSlide key={item.id} className="swiper-slide">
                                    <div
                                        className="home3-banner-wrapper"
                                        style={bannerBackgroundStyle(item.image)}
                                    >
                                        <div className="home3-banner-content-wrap">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="home3-banner-content">
                                                            <div className="eg-tag">
                                                                <span>{item.tag}</span>
                                                            </div>
                                                            <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                                                            <div className="banner-content-bottom">
                                                                <Link href="/package" className="primary-btn4">
                                                                    <span>
                                                                        Book a Trip
                                                                        <PlaneIcon />
                                                                    </span>
                                                                </Link>
                                                                <a
                                                                    style={{ cursor: "pointer" }}
                                                                    onClick={() => setOpen(true)}
                                                                    className={`video-area ${item.videoClass}`}
                                                                >
                                                                    <VideoIcon />
                                                                    <h6>Watch Tour</h6>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </div>
                </Swiper>
                <div className="slider-btn-grp">
                    <div className="slider-btn home3-banner-prev">
                        <i className="bi bi-arrow-up" />
                    </div>
                    <div className="progress-pagination" />
                    <div className="slider-btn home3-banner-next">
                        <i className="bi bi-arrow-down" />
                    </div>
                </div>
                <React.Fragment>
                    <ModalVideo
                        channel="youtube"
                        isOpen={isOpen}
                        animationSpeed="350"
                        videoId="r4KpWiK08vM"
                        ratio="16:9"
                        onClose={() => setOpen(false)}
                    />
                </React.Fragment>
            </div>
        </>
    );
};

export default Home3Banner;
