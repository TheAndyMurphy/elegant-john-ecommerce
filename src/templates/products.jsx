import React from "react"
import Layout from "../layouts/index"
import { Link, graphql } from 'gatsby'

const Products = ({ pageContext, data }) => {
  const { edges } = data.allDatoCmsProduct
  return (
    <Layout navBg={true}>
        <div className="Wrap Main">
            <h1>{pageContext.category}</h1>
            <div className="Catalogue">
                {
                    edges.map(({ node: product }) => (
                        <div className="Catalogue__item" key={product.id}>
                        <div
                            className="Product"
                        >
                            <div className="Product__image">
                                <img src={product.productImage.url} />
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
            productCategory{
                category
            }
        }
      }
    }
  }
`