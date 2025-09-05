import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import StudentHistoryArea from './StudentHistoryArea'

const StudentHistory = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <StudentHistoryArea />
         </main>
         <Footer />
      </>
   )
}

export default StudentHistory

