import {  Navbar } from "react-bootstrap"
import "../styles/header.css"

function Header() {
  return (
    <div style={{backgroundColor:"#FF2200"}}> 
      <Navbar className="header-main">
          <Navbar.Brand href="/" className="header-brand">g4 Cafe</Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default Header