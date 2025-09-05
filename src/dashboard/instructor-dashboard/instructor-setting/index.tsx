import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import InstructorSettingArea from './InstructorSettingArea'

const InstructorSetting = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <InstructorSettingArea />
         </main>
         <Footer />
      </>
   )
}

export default InstructorSetting
