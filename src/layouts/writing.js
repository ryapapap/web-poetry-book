import React from "react";
import WritingNav from '../components/WritingNav';

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
      <WritingNav
        {...pathContext}
      />
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
