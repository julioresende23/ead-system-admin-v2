import Footer from "../../../layouts/footers/Footer"
import HeaderOne from "../../../layouts/headers/Header"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import CartArea from "./CartArea"

const Cart = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Cart" sub_title="Cart" />
            <CartArea />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default Cart
