import HeaderThree from "@/layouts/headers/HeaderThree"
import FeatureArea from "./FeatureArea"
import BreadCrumb from "./BreadCrumb"
import FooterFour from "@/layouts/footers/FooterFour"

const FeatureThree = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb />
            <FeatureArea />
         </main>
         <FooterFour />
      </>
   )
}

export default FeatureThree
