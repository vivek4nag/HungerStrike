import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./NavBar"

const Layout = () => {
  return (
    <>
        <NavBar/>
            {/* <h1>hello</h1> */}
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout