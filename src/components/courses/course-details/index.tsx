import Footer from "../../../layouts/footers/Footer";
import HeaderOne from "../../../layouts/headers/Header";
import BreadcrumbTwo from "../../common/breadcrumb/BreadcrumbTwo";
import CourseDetailsArea from "./CourseDetailsArea";

const CourseDetails = () => {

   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbTwo title="Resolving Conflicts Between Designers And Engineers" sub_title="Courses" />
            <CourseDetailsArea />
         </main>
         <Footer style={false} style_2={true} />
      </>
   );
};

export default CourseDetails;
