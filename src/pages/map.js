import React from "react";
import Link from 'gatsby-link';
import _ from 'lodash';

export default function Template({
  data, pathContext
}) {
  const pages = _.sortBy(data.allFile.edges, ({ node }) => node.name);
  return (
    <ul className="page-list">
      {pages
        .map(({ node }, i) => 
          <li>
            <Link to={`/${i+1}`} key={i}>
              {node.name}
            </Link>
          </li>
        )
      }
    </ul>
  );
}

export const query = graphql`
  query AllWriting {
    # not sure why sorting doesn't work probs a bug here~
    allFile #(sort: { fields: name, order: ASC}) 
    {
      edges {
        node {
          birthTime
          name
        }
      }
    }
  }
`;
