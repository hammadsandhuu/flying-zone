import AboutSection from "@/components/about/AboutSection";
import Home1Activities from "@/components/activities/Home1Activities";
import HomeSection from "@/components/banner/HomeSection";
import BookingForm from "@/components/banner/BookingForm";
import Home1Banner2 from "@/components/banner/Home1Banner2";
import Home1Blog from "@/components/blog/Home1Blog";
import DestinationSection from "@/components/destination/DestinationSection";
import Home1FacilitySlide from "@/components/facilitySlide/Home1FacilitySlide";
import FacilitySection from "@/components/facilitySlide/FacilitySection";
import Home1Testimonail from "@/components/testimonial/Home1Testimonail";
// import Home1TourPackage from "@/components/tourPackage/Home1TourPackage";
import VisaSection from "@/components/visaComponents/VisaSection";
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
      <HomeSection />
      <BookingForm />
      <AboutSection />
      <DestinationSection />
      <VisaSection />
      <FacilitySection />
      <Home1FacilitySlide />
      {/* <Home1TourPackage /> */}
      <Home1WhyChoose />
      <Home1Activities />
      <Home1Banner2 />
      <Home1Testimonail />
      <Home1Blog />
    </>
  );
}
