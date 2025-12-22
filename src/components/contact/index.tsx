import HeaderThree from "@/layouts/headers/HeaderThree"
import BreadCrumb from "../common/BreadCrumb"
import ContactArea from "./ContactArea"
import FooterFour from "@/layouts/footers/FooterFour"

const Contact = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Contact With Us" sub_title="Contact" />
            <ContactArea />
         </main>
         <FooterFour />
      </>
   )
}

export default Contact
