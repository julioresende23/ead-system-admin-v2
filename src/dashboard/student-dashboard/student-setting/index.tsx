import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import StudentSettingArea from './StudentSettingArea'

const StudentSetting = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <StudentSettingArea />
         </main>
         <Footer />
      </>
   )
}

export default StudentSetting

