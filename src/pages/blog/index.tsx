import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

import type { HeadFC, PageProps } from 'gatsby'

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {

    return (
        <Layout pageTitle="Krollo's Blog Posts">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.frontmatter?.slug}`}>
                                {node.frontmatter?.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter?.date}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query BlogPage {
        allMdx(
            sort: {frontmatter: {date: DESC}}
            filter: {frontmatter: {private: {ne: true}}}
        ) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                    private
                }
                id
            }
        }
    }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage