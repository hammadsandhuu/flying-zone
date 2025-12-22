import BreadCrumb from "./BreadCrumb"
import TourDetailsArea from "./TourDetailsArea"
import TourAboutDetails from "./TourAboutDetails"
import HeaderThree from "@/layouts/headers/HeaderThree"
import Listing from "./Listing"
import FooterFour from "@/layouts/footers/FooterFour"

interface FeatureDetailsTwoProps {
   tour?: any;
}

const FeatureDetailsTwo = ({ tour }: FeatureDetailsTwoProps) => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb tour={tour} />
            <TourDetailsArea tour={tour} />
            <TourAboutDetails />
            <Listing />
         </main>
         <FooterFour />
      </>
   )
}

export default FeatureDetailsTwo
