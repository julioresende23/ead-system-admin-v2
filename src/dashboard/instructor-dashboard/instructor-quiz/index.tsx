import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import InstructorQuizArea from './InstructorQuizArea'

const InstructorQuiz = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <InstructorQuizArea />
         </main>
         <Footer />
      </>
   )
}

export default InstructorQuiz
