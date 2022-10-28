import Footer from "./FooterComponent"
import Navbar from "./Nav"
import { Outlet } from 'react-router-dom'
import ErrorBoundary from "./Error_boundary"


export default function Layout() {
  return (
    <div>
      <Navbar />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </div>
  )
}
