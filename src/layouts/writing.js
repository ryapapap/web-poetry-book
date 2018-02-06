import React from "react";
import Link, { navigateTo } from 'gatsby-link';

export default function Template({
  data, pathContext
}) {
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }}
        />
      </div>
      { pathContext.index !== 1 &&
        <Link to="/1">
          First
        </Link>
      }
      { pathContext.index !== 1 &&
        <Link to={`/${pathContext.index - 1}`}>
          Prev
        </Link>
      }
      <button 
      onClick={() => {
        const page = Math.floor((Math.random() * pathContext.max) + 1);
        navigateTo(`/${page}`);
      }}
    >
      Random
    </button>
      <Link to="/index">
        Index
      </Link>
      { pathContext.index !== pathContext.max &&
        <Link to={`/${pathContext.index + 1}`}>
          Next
        </Link>
      }
      { pathContext.index !== pathContext.max &&
        <Link to={`/${pathContext.max}`}>
          Latest
        </Link>
      }
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    file(id: { eq: $slug }) {
      birthTime
      name
      childMarkdownRemark {
        html
      }
    }
  }
`;
