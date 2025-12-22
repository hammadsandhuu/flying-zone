import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import ShopDetailsArea from "./ShopDetailsArea"
import FooterFour from "@/layouts/footers/FooterFour"
import ShopDetailsTabArea from "./ShopDetailsTabArea"

const ShopDetails = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Shop Details" sub_title="Bluetooth Headphone" />
            <ShopDetailsArea />
            <ShopDetailsTabArea />
         </main>
         <FooterFour />
      </>
   )
}

export default ShopDetails
