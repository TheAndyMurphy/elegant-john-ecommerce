import React from 'react'
import { Link } from 'gatsby'
import Logo from '../img/logo.png'

const Header = ({site}) => (
<div className="Header">
        <div className="Wrap" >
          <div className="Header__body">
            <h1 className="Header__title">
              <Link to="/">
                <img src={Logo} alt="Logo"/>
              </Link>
            </h1>
            <div className="Header__summary snipcart-summary snipcart-checkout">
              <div className="Header__summary__title">
                <div>Shopping Cart</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" fill="white" /></svg>
                <div className="Header__item-count snipcart-total-items">0</div>
              </div>
              <div className="Header__summary__line">
                Total price: <span className="snipcart-total-price">€0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
)

export default Header