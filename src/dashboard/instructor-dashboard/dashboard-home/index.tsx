import Footer from '../../../layouts/footers/Footer'
import HeaderOne from '../../../layouts/headers/Header'
import DashboardHomeArea from './DashboardHomeArea'

const DashboardHome = () => {
  return (
    <>
      <HeaderOne />
      <main className="main-area fix">
        <DashboardHomeArea />
      </main>
      <Footer />
    </>
  )
}

export default DashboardHome
