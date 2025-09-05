import Footer from "../../../layouts/footers/Footer"
import HeaderOne from "../../../layouts/headers/Header"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Blog Details" sub_title="Blogs" sub_title_2="How To Become idiculously Self-Aware In 20 Minutes" style={true} />
            <BlogDetailsArea />
         </main>
         <Footer style={false} style_2={true}  />
      </>
   )
}

export default BlogDetails

