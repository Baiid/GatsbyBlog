import React, { useState } from "react"
import NavbarLinks from "./navLinks"
import Logo from "../../images/logo.svg"
import {Navigation, Toggle, Navbox, Hamburger, LogoW, LogoS} from './nav.styled'


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
//     <LogoW>
//    <a href="/"><LogoS to="/" src={Logo}/></a>
//    </LogoW>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
