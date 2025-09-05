import Footer from "../../../../layouts/footers/Footer"
import HeaderOne from "../../../../layouts/headers/Header"
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne"
import InstructorArea from "./InstructorArea"

const Instructors = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="All Instructors" sub_title="Instructors" />
            <InstructorArea />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default Instructors
