import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import InstructorEnrolledCourseArea from '../instructor-enrolled-courses/InstructorEnrolledCourseArea'

const InstructorCourses = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <InstructorEnrolledCourseArea style={true} />
         </main>
         <Footer />
      </>
   )
}

export default InstructorCourses
