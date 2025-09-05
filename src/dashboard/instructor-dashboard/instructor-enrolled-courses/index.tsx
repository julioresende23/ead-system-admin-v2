import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import InstructorEnrolledCourseArea from './InstructorEnrolledCourseArea'

const InstructorEnrolledCourse = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <InstructorEnrolledCourseArea />
         </main>
         <Footer />
      </>
   )
}

export default InstructorEnrolledCourse
