import React, { useState, useEffect } from 'react'
import Logo from '../img/logo.png'
import { Link } from 'gatsby'


const Navbar = ({navBg}) => {
    const [ navToggle, setNavToggle ] = useState(false)
    const toggleNav = () => {
        setNavToggle(!navToggle)
    }
    useEffect(()=>{
        if(window.innerWidth >= 900) setNavToggle(false)
        console.log(navBg)
    }, [])


    return(
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <Link to="/"><img src={Logo} width="auto" height="80px" alt="Logo"/></Link>
                </div>
                <div className="navbar__cart snipcart-summary snipcart-checkout">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" fill="white" /></svg>
                    <div className="navbar__cart__count snipcart-total-items"></div>
                </div>
                <div className={`navbar__burger ${navToggle ? 'toggled' : ''}`} onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`navbar__links ${navToggle && navBg ? 'toggled bg' : navToggle ?  'toggled' : ''}`}>
                    <div className="navbar__links__container">
                        <Link to='/'>Home</Link>
                        <Link to='/shop'>Shop</Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Navbar