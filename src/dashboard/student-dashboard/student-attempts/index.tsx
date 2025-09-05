import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import StudentAttemptsArea from './StudentAttemptsArea'

const StudentAttempts = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <StudentAttemptsArea />
         </main>
         <Footer />
      </>
   )
}

export default StudentAttempts

