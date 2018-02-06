import React from "react";
import Link from 'gatsby-link';

export default function Template({
  data, pathContext
}) {
  console.log(data);
  return (
    <ul className="page-list">
      {data.allFile.edges
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
    allFile #(sort: { fields: birthTime, order: DESC}) 
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
