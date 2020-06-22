const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/templates/product.jsx`);
  const productsTemplate = path.resolve("src/templates/products.jsx")
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadPagesQuery {
        allDatoCmsProduct {
          edges {
            node {
                id
                productName
                productPrice
                productImage {
                    url
                }
                productLink
                productDescription
                productCategory {
                  category
                }
            }
          }
        }
        allDatoCmsCategory {
          edges {
            node {
              category
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create product pages.
    result.data.allDatoCmsProduct.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `/${edge.node.productCategory.category}/${edge.node.productLink}`,
        component: productTemplate,
        context: {
            id: edge.node.id,
            productName: edge.node.productName,
            productLink: edge.node.productLink,
            productImage: edge.node.productImage.url,
            productPrice: edge.node.productPrice,
            productCategory: edge.node.productCategory,
            productCode: edge.node.productCode,
            productDimensions: edge.node.productDimensions,
            productDescription: edge.node.productDescription
        },
      });
    });
    // Create product pages.
    result.data.allDatoCmsCategory.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `/${edge.node.category}`,
        component: productsTemplate,
        context: {
            id: edge.node.id,
            category: edge.node.category,
        },
      });
    });
  });
};
