import { Outlet } from "react-router-dom"
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
