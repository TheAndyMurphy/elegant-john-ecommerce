import React, { useState, useEffect } from 'react'
import Logo from '../img/logo.png'
import { StaticQuery, Link } from 'gatsby'


const Navbar = ({navBg, data}) => {
    const { edges } = data.allDatoCmsCategory
    const [ navToggle, setNavToggle ] = useState(false)
    const [ scrolled, setScrolled] = useState(false)
    const [ dropdownState, setDropdownState] = useState(false)

    const toggleNav = () => {
        setNavToggle(!navToggle)
    }
    const toggleDropdown = () => {
        setDropdownState(!dropdownState)
    }
    useEffect(()=>{
        if(window.innerWidth >= 900) setNavToggle(false)
        window.addEventListener('scroll', ()=>{
            if(window.pageYOffset >= 50) setScrolled(true)
            else setScrolled(false)
        })
    }, [])


    return(
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
                <div className={`navbar__links ${navToggle && navBg ? 'toggled bg' : navToggle && scrolled ?  'toggled bg' : navToggle ? 'toggled' : ''}`}>
                    <ul className="navbar__links__container">
                        <li><Link to='/'>Home</Link></li>
                        <li className="dropdown">
                            <button onClick={toggleDropdown}>Shop <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" fill="white" transform = {dropdownState ? 'scale(-1)' : 'none'} transform-origin='center' /></svg></button>
                            <div className={dropdownState ? 'dropdown__content toggled' : 'dropdown__content'}>
                                { edges.map(edge => (
                                    <Link to={`/${edge.node.category}`}>{edge.node.category}</Link>
                                ))}
                            </div>
                        </li>
                        <li><Link>Showroom</Link></li>
                        <li><Link to='/'>Work</Link></li>
                        <li><Link to='/'>Finance</Link></li>
                        <li><Link to='/'>Trade</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
    
}


export default () => (
    <StaticQuery
      query={graphql`
        query ProductCategories {
            allDatoCmsCategory(sort: { fields: [category], order: ASC }) {
                edges {
                    node {
                        category
                    }
                }
            }
        }
      `}
      render={(data) => <Navbar data={data} />}
    />
  )