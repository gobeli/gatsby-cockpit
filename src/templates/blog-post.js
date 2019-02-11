import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import { excerpt } from "../utils/helpers";
import Post from "../components/Post";

class BlogPostTemplate extends React.Component {
  render() {
    const { previous, next } = this.props.pageContext;
    const post = this.props.data.cockpitPost;
    const postExcerpt = excerpt(post.content.value, 100);
    return (
      <Layout location={this.props.location} title={post.title.value}>
        <SEO title={post.title.value} description={postExcerpt} />
        <Post post={post} home={false} />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug.value} rel="prev">
                ← {previous.title.value}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug.value} rel="next">
                {next.title.value} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    cockpitPost(id: { eq: $id }) {
      ...PostFragment
    }
  }
`;
