import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Post from "../components/Post";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allCockpitPost.edges;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" keywords={[`blog`, `gatsby`]} />
        <Bio />
        {posts.map(({ node }) => (
          <Post key={node.id} post={node} home={true} />
        ))}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allCockpitPost {
      edges {
        node {
          ...PostFragment
        }
      }
    }
  }
`;
