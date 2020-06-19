import React from 'react';
import Layout from "../layouts/index"
import Img from 'gatsby-image'

const Shop = ({ data }) => (
  <Layout site={data.site}>
    <div className="Wrap Main">
      <div className="Catalogue">
        {
          data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div
                className="Product snipcart-add-item"
              >
                <div className="Product__image">
                  <Img sizes={product.productImage.sizes} />
                </div> <div className="Product__details">
                  <div className="Product__name">
                    {product.productName}
                    <div className="Product__price">
                      €{product.productPrice}
                    </div>
                  </div>
                  <button 
                    className="Product__buy Product snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.productPrice}
                    data-item-image={product.productImage.url}
                    data-item-name={product.productName}
                    data-item-url={`/shop/`}
                    data-item-has-taxes-included="true"
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
        ))
      }
      </div>
    </div> 
  </Layout>
);

export default Shop

export const query = graphql`
query CatalogueQuery {
    products: allDatoCmsProduct {
      edges {
        node {
          id
          productName
          productPrice
          productImage {
            url
            sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;