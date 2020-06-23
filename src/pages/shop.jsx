import React from 'react';
import Layout from "../layouts/index"
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const Shop = ({ data }) => (
  <Layout site={data.site} navBg={true}>
    <div className="Wrap Main">
      <div className="Catalogue">
        {
          data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div
                className="Product"
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
                  <Link to={`/${product.productCategory.category}/${product.productLink}`} >Learn More</Link>
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
          productLink
          productCategory{
            category
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