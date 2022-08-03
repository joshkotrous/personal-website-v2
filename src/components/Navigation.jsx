import React, {useState} from 'react'
import '../assets/fonts.css'
import {ReactComponent as Hamburger} from '../assets/hamburger.svg'

const navContainer = {
  position: 'fixed',
  width: '100%',
  userSelect: 'none',
  zIndex: '9999'
}

const headerContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white', 
    fontFamily: 'Urbanist',
    paddingRight: '16px',
    paddingLeft: '16px',
    paddingTop: '16px',
    paddingBottom: '0',
}

const navHeader = { 
  margin: '0'
}

let navOptionsContainer = {
  display: 'none',
  textAlign: 'right',
  position: 'fixed',
  right: '0',
  marginRight: '16px',
  animationName: 'fadeInDown',
  animationDuration: '1s'
}

const navOptionContainer = {
  padding: '0',
  marginTop: '4px'  
}



const navOption = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '16px',
  fontFamily: 'Urbanist',
  fontWeight: '500'
}

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuClick = (()=> {
    if (showMenu) {
      setShowMenu(false)
      navOptionsContainer = {
        display:'none'
      }
    } else {
      setShowMenu(true)
      navOptionsContainer = {
        display:'inline-block',
        textAlign: 'right',
        position: 'fixed',
        right: '0',
        marginRight: '16px'
      }
    }
  })

  return (

    
    <div style={navContainer}>
      <div style={headerContainer}>
        <h1 style={navHeader}>josh</h1>
        <div >
            <Hamburger onClick={menuClick}  />
        </div>
      </div>
      <div style={navOptionsContainer}>
          <div style={navOptionContainer}><a onClick={menuClick} style={navOption} href='./#about'>about</a></div>
          <div style={navOptionContainer}><a onClick={menuClick} style={navOption} href='./#skills'>skills</a></div>
          <div style={navOptionContainer}><a onClick={menuClick} style={navOption} href='./#projects'>projects</a></div>
          <div style={navOptionContainer}><a onClick={menuClick} style={navOption} href='./#contact'>contact</a></div>
      </div>
    </div>

  )
}

export default Navigation