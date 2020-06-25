import React from 'react'
import { Link } from 'gatsby'

const ProductCard = ({img, name, price, url, category, dimensions}) => (
    
    <Link to={`/${category}/${url}`} className="product-card">
        <div className="product-card__img">
            <img src={img} alt=""/>
        </div>
        <div className="product-card__details">
            <div className="product-card__price">{price}</div>
            <div className="product-card__title">{name}</div>
            <div className="product-card__dimensions">{dimensions}</div>
            <button className="product-card__cta">View Details</button>
        </div>

    </Link>
)

export default ProductCard