import Footer from "../../../layouts/footers/Footer"
import HeaderOne from "../../../layouts/headers/Header"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import BlogArea from "./BlogArea"

const Blog = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Latest Right Sidebar" sub_title="Blogs" />
            <BlogArea style_1={false} />
         </main>
         <Footer style={false} style_2={true} />
      </>
   )
}

export default Blog

