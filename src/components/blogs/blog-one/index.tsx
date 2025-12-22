import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import BlogArea from "./BlogArea"
import FooterFour from "@/layouts/footers/FooterFour"

const BlogOne = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Blogs" sub_title="Blog" />
            <BlogArea />
         </main>
         <FooterFour />
      </>
   )
}

export default BlogOne
