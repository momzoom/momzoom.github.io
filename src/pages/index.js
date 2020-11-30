import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { List, Avatar } from "antd"
import avatar from "../../static/avatar.jpg"
import favicon from "../../static/favicon.ico"

import "antd/dist/antd.css"

const ArticleList = ({ listData }) => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={listData}
    renderItem={post => (
      <List.Item
        key={post.fields.slug}
        // actions={[post.frontmatter.date]}
        extra={<img width={150} alt="logo" src={favicon} />}
      >
        <List.Item.Meta
          avatar={<Avatar src={avatar} />}
          title={
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">
                {post.frontmatter.title || post.fields.slug}
              </span>
            </Link>
          }
          description={post.frontmatter.date}
        />
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </List.Item>
    )}
  />
)

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="萌天天" />
      <Bio />
      <ArticleList listData={posts} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
