import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import InstructorProfileArea from './InstructorProfileArea'

const InstructorProfile = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <InstructorProfileArea />
         </main>
         <Footer />
      </>
   )
}

export default InstructorProfile
