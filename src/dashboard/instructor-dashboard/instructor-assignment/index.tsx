import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import InstructorAssignmentArea from './InstructorAssignmentArea'

const InstructorAssignment = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <InstructorAssignmentArea />
         </main>
         <Footer />
      </>
   )
}

export default InstructorAssignment
