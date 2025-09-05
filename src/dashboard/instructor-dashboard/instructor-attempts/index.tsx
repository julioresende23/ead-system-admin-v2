import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import InstructorAttemptsArea from './InstructorAttemptsArea'

const InstructorAttempts = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <InstructorAttemptsArea />
         </main>
         <Footer />
      </>
   )
}

export default InstructorAttempts
