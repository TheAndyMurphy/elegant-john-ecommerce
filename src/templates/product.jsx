import React from 'react'
import Layout from "../layouts/index"

const Product = ({path, pageContext}) => (
    <Layout navBg={true}>
      <div className="Wrap">
        <div className="product" key={pageContext.id}>
          <div className="product__image">
            <img src={pageContext.productImage} />
          </div> 
          <div className="product__details">
            <div className="product__title">
              <h1>{pageContext.productName}</h1>
            </div>
            <div className="product__description">
              <p>{pageContext.productDescription}</p>
            </div>
            <div className="product__dimensions">
              <p>{pageContext.productDimensions}</p>
            </div>

            <div className="product__price">
              €{pageContext.productPrice}
            </div>
            <button 
              className="product__buy snipcart-add-item"
              data-item-id={pageContext.id}
              data-item-price={pageContext.productPrice}
              data-item-image={pageContext.productImage}
              data-item-name={pageContext.productName}
              data-item-url={path}
              data-item-has-taxes-included="true"
            >
              Buy now
            </button>
          </div>
        </div>
      </div> 
    </Layout>
)

export default Product