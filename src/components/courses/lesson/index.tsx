import Footer from "../../../layouts/footers/Footer"
import HeaderOne from "../../../layouts/headers/Header"
import LessonArea from "./LessonArea"

const Lesson = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <LessonArea />
         </main>
         <Footer style={false} style_2={true} />
      </>
   )
}

export default Lesson
