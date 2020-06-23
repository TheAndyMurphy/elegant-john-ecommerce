import React from 'react'
import Layout from "../layouts/index"

const Product = ({path, pageContext}) => (
    <Layout navBg={true}>
        <div className="Wrap Main">
            <div className="Catalogue__item" key={pageContext.id}>
              <div
                className="Product snipcart-add-item"
              >
                <div className="Product__image">
                  <img src={pageContext.productImage} />
                </div> <div className="Product__details">
                  <div className="Product__name">
                    <h3>{pageContext.productName}</h3>
                    <div className="Product__price">
                      €{pageContext.productPrice}
                    </div>
                  </div>
                  <button 
                    className="Product__buy Product snipcart-add-item"
                    data-item-id={pageContext.id}
                    data-item-price={pageContext.productPrice}
                    data-item-image={pageContext.productImage}
                    data-item-name={pageContext.productName}
                    data-item-url={path}
                    data-item-has-taxes-included="true"
                  >
                    Buy now
                  </button>
                  <p>{pageContext.productDescription}</p>
                </div>
              </div>
      </div>
    </div> 

    </Layout>
)

export default Product