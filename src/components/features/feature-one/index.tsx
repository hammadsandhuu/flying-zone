import FeatureArea from "./FeatureArea"
import BreadCrumb from "./BreadCrumb"
import HeaderSix from "@/layouts/headers/HeaderSix"
import FooterFour from "@/layouts/footers/FooterFour"

const FeatureOne = () => {
   return (
      <>
         <HeaderSix />
         <main>
            <BreadCrumb />
            <FeatureArea />
         </main>
         <FooterFour />
      </>
   )
}

export default FeatureOne
