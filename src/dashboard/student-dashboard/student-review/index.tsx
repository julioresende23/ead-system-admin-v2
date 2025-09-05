import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import StudentReviewArea from './StudentReviewArea'

const StudentReview = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <StudentReviewArea />
         </main>
         <Footer />
      </>
   )
}

export default StudentReview
