import React from 'react'

const Banner = ({img, title}) => (
    <div className="banner" style={{backgroundImage: `url(${img})` }}>
        <div className="banner__overlay">
            <h1>{title}</h1>
        </div>
    </div>
)

export default Banner