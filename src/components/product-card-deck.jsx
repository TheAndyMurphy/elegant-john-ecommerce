import React from 'react'
import ProductCard from './product-card'

const ProductCardDeck = ({products}) => (
    <div className="product-card-deck">
        {
            products.map(({node: product}) => (
                <ProductCard
                    key={product.id}
                    img={product.productImage.url}
                    name={product.productName}
                    price={product.productPrice}
                    url={product.productLink}
                    category={product.productCategory.category}
                    dimensions={product.productDimensions}
                />
            ))
        }
    </div>
)

export default ProductCardDeck