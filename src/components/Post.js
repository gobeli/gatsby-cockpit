import React from "react";
import { Link, graphql } from "gatsby";

import { excerpt } from "../utils/helpers";

class Post extends React.Component {
  render() {
    const post = this.props.post;
    const title = post.title.value || post.slug.value;
    return (
      <div key={post.slug.value}>
        {this.props.home && (
          <h3>
            <Link style={{ boxShadow: `none` }} to={post.slug.value}>
              {title}
            </Link>
          </h3>
        )}
        <p
          dangerouslySetInnerHTML={{
            __html: this.props.home
              ? excerpt(post.content.value, 100)
              : post.content.value
          }}
        />
      </div>
    );
  }
}

export default Post;

export const query = graphql`
  fragment PostFragment on CockpitPost {
    id
    title {
      value
    }
    content {
      value
    }
    slug {
      value
    }
    image {
      value {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`;
