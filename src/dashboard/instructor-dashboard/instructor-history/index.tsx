import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import InstructorHistoryArea from './InstructorHistoryArea'

const InstructorHistory = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <InstructorHistoryArea />
         </main>
         <Footer />
      </>
   )
}

export default InstructorHistory
