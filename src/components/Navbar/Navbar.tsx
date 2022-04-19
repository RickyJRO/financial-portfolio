import { faDesktop, faHome, faSignature, faSignIn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import NavButton from '../NavButton/NavButton'

import './index.css'

export default function Navbar() {
  return (
    <div className='navBar'>
      <div className='navBarContainerLeft'>
        <Link to="/"><p className='gtsTitle'>FP</p></Link>
      </div>
      <div className='navBarContainerRight'>
        <Link to="/"><NavButton label='Home' icon={<FontAwesomeIcon icon={faHome}/>}/></Link>
        <Link to="dashboard"><NavButton label='Dashboard' icon={<FontAwesomeIcon icon={faDesktop}/>}/></Link>
        <Link to="login"><NavButton label='Log In' icon={<FontAwesomeIcon icon={faSignIn}/>}/></Link>
        <Link to="register"><NavButton label='Sign In' icon={<FontAwesomeIcon icon={faSignature}/>}/></Link>
      </div>
    </div>
  )
}
