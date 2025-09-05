import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import InstructorReviewArea from './InstructorReviewArea'

const InstructorReview = () => {
  return (
   <>
         <HeaderOne />
         <main className="main-area fix">
            <InstructorReviewArea />
         </main>
         <Footer />
      </>
  )
}

export default InstructorReview
