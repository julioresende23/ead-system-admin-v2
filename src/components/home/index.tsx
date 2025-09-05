import Banner from "./Banner"
import About from "./About"
import CourseArea from "./CourseArea"
import Newsletter from "./Newsletter"
import Instructor from "./Instructor"
import Counter from "./Counter"
import FaqArea from "./FaqArea"
import Features from "./Features"
import InstructorTwo from "./InstructorTwo"
import Blog from "./Blog"
import Categories from "./Categories"
import Header from "../../layouts/headers/Header"
import BrandOne from "../common/brands/BrandOne"
import Footer from "../../layouts/footers/Footer"

const HomeOne = () => {
   return (
      <>
         <Header />
         <main className="main-area fix">
            <Banner />
            <Categories />
            <BrandOne />
            <About />
            <CourseArea style={false} />
            <Newsletter />
            <Instructor />
            <Counter />
            <FaqArea />
            <Features />
            <InstructorTwo style={false} />
            <Blog style={false} />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default HomeOne
