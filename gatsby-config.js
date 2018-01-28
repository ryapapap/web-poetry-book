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
    `gatsby-transformer-remark`,
  ],
};
