import Footer from "../../../../layouts/footers/Footer"
import HeaderOne from "../../../../layouts/headers/Header"
import BreadcrumbTwo from "../../../common/breadcrumb/BreadcrumbTwo"
import InstructorDetailsArea from "./InstructorDetailsArea"

const InstructorsDetails = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbTwo title="Robert Fox" sub_title="Instructors" />
            <InstructorDetailsArea />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default InstructorsDetails
