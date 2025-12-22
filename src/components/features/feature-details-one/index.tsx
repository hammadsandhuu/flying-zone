import HeaderThree from "@/layouts/headers/HeaderThree"
import Breadcrumb from "./Breadcrumb"
import FeatureDetailsArea from "./FeatureDetailsArea"
import FeatureAboutArea from "./FeatureAboutArea"
import FooterFour from "@/layouts/footers/FooterFour"

const FeatureDetailsOne = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb />
            <FeatureDetailsArea />
            <FeatureAboutArea />
         </main>
         <FooterFour />
      </>
   )
}

export default FeatureDetailsOne
