import React from "react"
import Layout from "../layouts/index"
import { Link, graphql } from 'gatsby'
import ProductCardDeck from '../components/product-card-deck'

const Products = ({ pageContext, data }) => {
  const { edges } = data.allDatoCmsProduct
  return (
    <Layout navBg={true}>
        <div className="Wrap">
            <h1>{pageContext.category}</h1>
            <ProductCardDeck products={edges} />

            <Link to="/shop">All Products</Link>
        </div> 
    </Layout>
  )
}
export default Products

export const pageQuery = graphql`
  query($category: String) {
    allDatoCmsProduct(
      limit: 2000
      filter: { productCategory: { category: { in: [$category] } } }
    ) {
      edges {
        node {
            id
            productName
            productPrice
            productImage {
                url
            }
            productLink
            productDimensions
            productCategory{
                category
            }
        }
      }
    }
  }
`