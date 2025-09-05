import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import StudentDashboardArea from './StudentDashboardArea'

const StudentDashboard = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <StudentDashboardArea />
         </main>
         <Footer />
      </>
   )
}

export default StudentDashboard
