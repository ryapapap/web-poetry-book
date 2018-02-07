module.exports = {
  siteMetadata: {
    title: 'Web Poetry Book',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/writing`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-113716157-1",
        anonymize: true,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-lodash`,
  ],
};
