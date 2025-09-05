import Footer from "../../../layouts/footers/Footer"
import HeaderOne from "../../../layouts/headers/Header"
import BrandOne from "../../common/brands/BrandOne"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import Features from "../../home/Features"
import Newsletter from "../../home/Newsletter" 
import About from "./About"
import Testimonial from "./Testimonial"

const AboutUs = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Who We Are" sub_title="About Us" />
            <About />
            <BrandOne />
            {/* <Feature style={true} /> */}
            <Newsletter />
            <Features />
            <Testimonial />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default AboutUs
