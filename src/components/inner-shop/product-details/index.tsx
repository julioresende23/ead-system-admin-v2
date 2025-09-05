import Footer from "../../../layouts/footers/Footer"
import HeaderOne from "../../../layouts/headers/Header"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import ProductDetailsArea from "./ProductDetailsArea"

const ProductDetails = () => {
  return (
    <>
      <HeaderOne />
      <main className="main-area fix">
        <BreadcrumbOne title="Shop Details" sub_title="Shop Details" />
        <ProductDetailsArea />
      </main>
      <Footer style={false} style_2={true} />
    </>
  )
}

export default ProductDetails
