import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import StudentWishlistArea from './StudentWishlistArea'

const StudentWishlist = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <StudentWishlistArea />
         </main>
         <Footer />
      </>
   )
}

export default StudentWishlist
