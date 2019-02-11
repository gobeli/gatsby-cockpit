import { graphql } from "gatsby";

export default graphql`
  fragment PostFragment on CockpitPostConnection {
    edges {
      node {
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
    }
  }
`;
