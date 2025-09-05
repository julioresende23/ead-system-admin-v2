import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import InstructorAnnouncementArea from './InstructorAnnouncementArea'

const InstructorAnnouncement = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <InstructorAnnouncementArea />
         </main>
         <Footer />
      </>
   )
}

export default InstructorAnnouncement
