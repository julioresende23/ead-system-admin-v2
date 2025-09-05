import Footer from "../../../layouts/footers/Footer";
import HeaderOne from "../../../layouts/headers/Header";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import BlogThreeArea from "./BlogThreeArea"

const BlogThree = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Blog Full Width" sub_title="Blogs" />
            <BlogThreeArea />
         </main>
         <Footer style={false} style_2={true}  />
      </>
   )
}

export default BlogThree;

