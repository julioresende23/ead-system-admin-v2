import Footer from "../../../layouts/footers/Footer"
import HeaderOne from "../../../layouts/headers/Header"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import CheckOutArea from "./CheckOutArea"

const CheckOut = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="check-out" sub_title="check-out" />
            <CheckOutArea />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default CheckOut
