import Footer from "../../../layouts/footers/Footer";
import HeaderOne from "../../../layouts/headers/Header";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import BlogArea from "../blog/BlogArea"

const BlogTwo = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Blog Left Sidebar" sub_title="Blogs" />
            <BlogArea style_1={true} />
         </main>
         <Footer style={false} style_2={true}  />
      </>
   )
}

export default BlogTwo;

