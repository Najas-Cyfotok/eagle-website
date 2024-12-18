import {Outlet, useNavigation} from 'react-router-dom'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

import LogoLight from '../assets/images/logo-light.png'
import LogoDark from '../assets/images/logo-dark.png'


export default function RootLayout(){
    return <>
    <main className="main-container">
      <Outlet/>
    </main>
    <Footer/>
    </>
}