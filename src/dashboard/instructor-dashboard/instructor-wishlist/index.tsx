import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import InstructorWishlistArea from './InstructorWishlistArea'

const InstructorWishlist = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <InstructorWishlistArea />
         </main>
         <Footer />
      </>
   )
}

export default InstructorWishlist
