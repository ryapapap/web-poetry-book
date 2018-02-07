const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/layouts/writing.js`);

  return graphql(`{
    allFile(
      sort: { fields: birthTime, order: ASC}
    ) {
      edges {
        node {
          birthTime
        	name
          id
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      
      result.data.allFile.edges
        .forEach(({ node }, i) => {
          const index = i+1;
          const max = result.data.allFile.edges.length;
          const path = `/${index}`;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              slug: node.id,
              index,
              max,
            }
          });

          if (index === max) {
            createPage({
              path: '/',
              component: blogPostTemplate,
              context: {
                slug: node.id,
                index,
                max,
              }
            })
          }
        });
    });
}
