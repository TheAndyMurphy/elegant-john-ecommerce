import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import "../style/index.sass";

const Layout = ({ children, navBg }) => {

  return(
    <>
      <Helmet title='Elegant John Shop' />
      <Navbar navBg={navBg}/>
      { navBg && <div className="nav-background"></div> }
      {children}
      <div className='Wrap'>
        <div className='Footer'>Elegant John Bathrooms 2020 &copy;</div>
      </div>
    </>
  )

};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
