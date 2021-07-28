import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout/Layout"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Layout>
      <h1>My blog posts</h1>

      {posts.map(post => (
        <article key={post.id}>
          <Link to={post.fields.slug}><h2>{post.frontmatter.title}</h2></Link>
          <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }`