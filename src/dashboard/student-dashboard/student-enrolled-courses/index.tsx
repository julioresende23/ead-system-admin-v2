import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import StudentEnrolledCoursesArea from './StudentEnrolledCoursesArea'

const StudentEnrolledCourses = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <StudentEnrolledCoursesArea />
         </main>
         <Footer />
      </>
   )
}

export default StudentEnrolledCourses
