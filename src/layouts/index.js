import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/header";
import "../style/index.sass";

const Layout = ({ children, site }) => (
  <div>
    <Helmet title='Elegant John Shop' />
    <div className='Container'>
      <Header site={site} />
      {children}
      <div className='Wrap'>
        <div className='Footer'>Elegant John Bathrooms 2020 &copy;</div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
