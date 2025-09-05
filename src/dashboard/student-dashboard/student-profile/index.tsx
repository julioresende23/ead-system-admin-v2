import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import StudentProfileArea from './StudentProfileArea'

const StudentProfile = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <StudentProfileArea />
         </main>
         <Footer />
      </>
   )
}

export default StudentProfile
