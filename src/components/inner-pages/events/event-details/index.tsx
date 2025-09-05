import Footer from "../../../../layouts/footers/Footer"
import HeaderOne from "../../../../layouts/headers/Header"
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne"
import EventDetailsArea from "./EventDetailsArea"

const EventDetails = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Resolving Conflicts Between Designers" sub_title="Events" sub_title_2="Resolving Conflicts Between Designers" style={true} />
            <EventDetailsArea />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default EventDetails

