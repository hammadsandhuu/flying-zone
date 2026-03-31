import Home1Activities from "@/components/activities/Home1Activities";
import Home1Banner2 from "@/components/banner/Home1Banner2";
import Home3Features from "@/components/feature/Home3Features";
import HomeVissa from "@/components/visaComponents/HomeVissa";
import Home4Testimonail from "@/components/testimonial/Home4Testimonail";
import HomeAbout from "@/components/about/HomeAbout";
import Home6Feature from "@/components/feature/Home6Feature";
import Destinations from "@/components/destinationSlider/Destinations";
import Home3DestinationSlide from "@/components/destinationSlider/Home3DestinationSlide";
import Home3Team from "@/components/team/Home3Team";
import HomeBanner from "@/components/banner/HomeBanner";
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
      <HomeBanner />
      <HomeAbout />
      <Destinations />
      <HomeVissa />
      {/* <Home3Destination /> */}
      <Home6Feature />
      <Home3Features />
      <Home3DestinationSlide />
      <Home1Activities />
      <Home4Testimonail />
      <Home1Banner2 />
      <Home3Team />
    </>
  );
}
