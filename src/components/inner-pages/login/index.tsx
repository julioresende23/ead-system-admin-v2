import Footer from "../../../layouts/footers/Footer"
import Header from "../../../layouts/headers/Header"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import LoginArea from "./LoginArea"

const Login = () => {
   return (
      <>
         <Header />
         <main className="main-area fix">
            <BreadcrumbOne title="Student Login" sub_title="Login" />
            <LoginArea />
         </main>
         <Footer style={false} style_2={false} />
      </>
   )
}

export default Login

