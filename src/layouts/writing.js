import React from "react";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    file(id: { eq: $slug }) {
      name
      childMarkdownRemark {
        html
      }
    }
  }
`;
