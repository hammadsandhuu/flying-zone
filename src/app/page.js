import Home1Activities from "@/components/activities/Home1Activities";
import Home1Banner2 from "@/components/banner/Home1Banner2";
import Home3Features from "@/components/feature/Home3Features";
import Home4Vissa from "@/components/visaComponents/Home4Vissa";
import Home4Testimonail from "@/components/testimonial/Home4Testimonail";
import Home6About from "@/components/about/Home6About";
import Home6Feature from "@/components/feature/Home6Feature";
import Home2Destinationslide from "@/components/destinationSlider/Home2Destinationslide";
import Home3DestinationSlide from "@/components/destinationSlider/Home3DestinationSlide";
import Home3Team from "@/components/team/Home3Team";
import Home3Banner from "@/components/banner/Home3Banner";
import Home3Destination from "@/components/destination/Home3Destination";

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
      <Home3Banner />
      <Home6About />
      <Home2Destinationslide />
      <Home4Vissa />
      <Home3Destination />
      <Home6Feature />
      <Home3Features />
      <Home3DestinationSlide />
      <Home1Activities />
      <Home4Testimonail />
      <Home1Banner2 />
      <Home3Team />
      {/* <Home2Banner /> */}
      {/* <HomeSection /> */}
      {/* <Home3Blog /> */}
      {/* <Home3Banner3 /> */}
      {/* <DestinationSection /> */}
      {/* <VisaSection /> */}
      {/* <DestinationSection /> */}
      {/* <FacilitySection /> */}
      {/* <Home1FacilitySlide /> */}
      {/* <Home1WhyChoose /> */}
      {/* <Home5WhyChoose /> */}
      {/* <Home6Feature /> */}
      {/* <Home1Activities /> */}
      {/* <Home1Banner2 /> */}
      {/* <Home3Features /> */}
      {/* <Home4Vissa /> */}
      {/* <Home3Banner3 /> */}
      {/* <Home1Blog /> */}
      {/* <Home2Team /> */}
      {/* <Home2VideoSection /> */}

    </>
  );
}
