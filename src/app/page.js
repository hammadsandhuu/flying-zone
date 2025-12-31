import AboutSection from "@/components/about/AboutSection";
import Home1Activities from "@/components/activities/Home1Activities";
import HomeSlider from "@/components/banner/HomeSlider";
import BookingForm from "@/components/banner/BookingForm";
import Home1Banner2 from "@/components/banner/Home1Banner2";
import Home1Blog from "@/components/blog/Home1Blog";
import Newslatter from "@/components/common/Newslatter";
import Destination1 from "@/components/destination/Destination1";
import Home1FacilitySlide from "@/components/facilitySlide/Home1FacilitySlide";
import Home1Fecilities2 from "@/components/facilitySlide/Home1Fecilities2";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home1Testimonail from "@/components/testimonial/Home1Testimonail";
import Topbar from "@/components/topbar/Topbar";
import Home1TourPackage from "@/components/tourPackage/Home1TourPackage";
import Home1Vise from "@/components/visaComponents/Home1Vise";
import Home1WhyChoose from "@/components/whyChoose/Home1WhyChoose";
export const metadata = {
  title: "Flying-Zone - Tour & Travel Agency  NextJs Template",
  description:
    "Flying-Zone is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <HomeSlider />
      <BookingForm />
      <AboutSection />
      <Destination1 />
      <Home1Vise />
      <Home1Fecilities2 />
      <Home1FacilitySlide />
      <Home1TourPackage />
      <Home1WhyChoose />
      <Home1Activities />
      <Home1Banner2 />
      <Home1Testimonail />
      <Home1Blog />

      <Newslatter />
      <Footer />
    </>
  );
}
