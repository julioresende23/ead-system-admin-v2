import Footer from "../../../layouts/footers/Footer"
import HeaderOne from "../../../layouts/headers/Header"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import ProductArea from "./ProductArea"

const Product = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Shop Page" sub_title="Shop Page" />
            <ProductArea />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default Product
