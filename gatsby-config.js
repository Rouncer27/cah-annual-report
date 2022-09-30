module.exports = {
  siteMetadata: {
    title: `Calgary Adapted Hub - Annual Report - Change the Game`,
    description: `Calgary Adapted Hub believes no one should have to sit on the sidelines. We’re working collectively to remove barriers to participation in sport programming at the community level. And we’re paving the way for organizations across the country to follow.`,
    author: `@switchbackc4ever`,
    metaImg: `src/images/social-media-default.png`,
    siteLogo: `src/images/main-logo.png`,
    siteUrl: `https://annualreport.calgaryadaptedhub.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e22726`,
        theme_color: `#e22726`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://annualreport.calgaryadaptedhub.com/",
        sitemap:
          "https://annualreport.calgaryadaptedhub.com/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://annualreport.calgaryadaptedhub.com/`,
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
