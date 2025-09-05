import Footer from "../../../layouts/footers/Footer"
import HeaderOne from "../../../layouts/headers/Header"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import ContactArea from "./ContactArea"

const Contact = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Contact With Us" sub_title="Contact" />
            <ContactArea />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default Contact

