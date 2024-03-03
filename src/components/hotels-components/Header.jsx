import React from 'react'
import { Container, Row, Button } from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';
import '../../styles/hotels-styles/header.css';
const navLinks = [
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/hotels',
        display:'Hotels'
    },
    {
        path:'/flights',
        display:'Flights'
    },
    {
        path:'/buses',
        display:'Buses'
    }
]


const Header = () => {
  return (
    <header className="header">
        <Container>
            <Row>
                <div className="navWrapper d-flex align-items-center justify-content-between">
                    
                        <div className="logo">
                            <span className='raw'>RAW</span>
                            <span className='explorer'>-TheExplorers</span>
                        </div>
                    
                    
                        <div className="navigation">
                           <ul className="menu d-flex align-items-center gap-5">
                                {
                                    navLinks.map((item, index)=>(
                                        <li className="navItem" key={index}>
                                            <NavLink to={item.path} className={navClass => navClass.isActive ? 'activeLink' : ''}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                                
                            </ul> 
                        </div>

                        <div className='navRight d-flex align-items-center gap-4'>
                          <div className="navBtns d-flex align-items-center gap-4">
                                <Button className='btn primaryBtn'>
                                    <Link to="/register">Register</Link>
                                </Button>
                                <Button className='btn secondaryBtn'>
                                    <Link to="/login">Log In</Link>
                                </Button>
                            </div> 
                            <span className="mobileMenu">
                                <i class="ri-menu-line"></i>
                            </span> 
                        </div>
                    
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header