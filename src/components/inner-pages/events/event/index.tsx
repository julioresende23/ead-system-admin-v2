import Footer from "../../../../layouts/footers/Footer"
import HeaderOne from "../../../../layouts/headers/Header"
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne"
import EventArea from "./EventArea"

const Event = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="All Events" sub_title="Events" />
            <EventArea />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default Event

