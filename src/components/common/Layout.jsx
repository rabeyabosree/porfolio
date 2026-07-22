import { Outlet } from "react-router-dom"
import Navbar from "../Home/Navbar"


function Layout() {
    return (
        <div className='max-w-[1440px]'>
           <Navbar/>

           <main className='mt-4 md:mt-18'>
            <Outlet/>
           </main>
        </div>
    )
}

export default Layout