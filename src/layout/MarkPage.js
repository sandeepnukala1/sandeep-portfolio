import React from "react"
import Layout from "./Layout"
import { graphql } from 'gatsby'

export default function MarkPage({ data }) {
    const post = data.markdownRemark
  
    return (
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }

export const query = graphql`
  query BlogQuery($slug: String!) { 
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`