const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/layouts/writing.js`);

  return graphql(`{
    allFile(
      sort: { fields: modifiedTime, order: DESC}
    ) {
      edges {
        node {
          modifiedTime
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
          const path = `/${i+1}`;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              slug: node.id,
              index: i+1,
              max: result.data.allFile.edges.length,
            }
          });
        });
    });
}
