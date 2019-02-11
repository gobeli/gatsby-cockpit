const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  return graphql(
    `
      {
        allCockpitPost {
          edges {
            node {
              id
              title {
                value
              }
              slug {
                value
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allCockpitPost.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `/${post.node.slug.value}`,
        component: blogPost,
        context: {
          id: post.node.id,
          post: post.node,
          previous,
          next
        }
      });
    });
  });
};
