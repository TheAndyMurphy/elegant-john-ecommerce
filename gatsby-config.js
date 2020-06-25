require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'Elegant John Bathrooms',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `700`]
          },
          {
            family: `Playfair Display`,
            variants: [`600`, `900`]
          },
        ],
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.SNIPCART_API_TOKEN,
        autopop: true
      }
    },
  ],
}
