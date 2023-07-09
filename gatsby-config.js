/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Bessa Creative Developer`,
    siteUrl: `https://www.bessa.dev`,
    description: `Lets build your website`,
    author: `Ronald Bessa, hello@bessa.dev`,
    keywords: "web designer, web developer, website",
    image: "bessa-dev.png",
  },

  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
