import React from 'react';
import Layout from "../layouts/index"
import ProductCardDeck from '../components/product-card-deck'

const Shop = ({ data }) => {
  const {edges} = data.products

  return(
    <Layout navBg={true}>
        <div className="Wrap">
            <h1>Shop All Products</h1>
            <ProductCardDeck products={edges} />

        </div> 
    </Layout>
  )
}
  

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