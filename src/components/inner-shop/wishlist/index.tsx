import Footer from "../../../layouts/footers/Footer"
import HeaderOne from "../../../layouts/headers/Header"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import WishlistArea from "./WishlistArea"

const Wishlist = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Wishlist" sub_title="Wishlist" />
            <WishlistArea />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default Wishlist
