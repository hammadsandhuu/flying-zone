import Breadcrumb from "@/components/common/Breadcrumb";
import Home2Activities from "@/components/activities/Home2Activities";
import Home2Team from "@/components/team/Home2Team";
import Home2Blog from "@/components/blog/Home2Blog";
import Home2WhyChoose from "@/components/whyChoose/Home2WhyChoose";
import Home2About from "@/components/about/Home2About";

export const metadata = {
  title: "Flying-Zone - Tour & Travel Agency  NextJs Template",
  description:
    "Flying-Zone is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const page = () => {
  return (
    <>
      <Breadcrumb pagename="About Us" pagetitle="About Us" />
      <Home2About />
      <Home2WhyChoose />
      <Home2Activities />
      <Home2Team />
      <Home2Blog />
    </>
  );
};

export default page;
