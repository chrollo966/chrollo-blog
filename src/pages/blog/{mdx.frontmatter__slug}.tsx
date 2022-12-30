import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

import type { HeadFC, PageProps } from 'gatsby'

type BlogPostType = {
    data: Queries.BlogPostQuery,
    children: React.ReactNode,
}

type HeadType = {
    data: Queries.BlogPostQuery,
}

const BlogPost = ({ data, children }: BlogPostType) => {
    
    if (!data || !data.mdx || !data.mdx.frontmatter || !data.mdx.frontmatter.title) return null

    const image = data.mdx.frontmatter.hero_image?.childImageSharp?.gatsbyImageData as IGatsbyImageData
    
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt as string}
            />
            <p>
                Photo Credit:{" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                    {data.mdx.frontmatter.hero_image_credit_text}
                </a>
            </p>
                {children}
            

            <Link to="/blog">Back to blog</Link>
        </Layout>
        
    )
}

export const query = graphql`
    query BlogPost($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

export const Head = ({ data }: HeadType) => <Seo title={data?.mdx?.frontmatter?.title} />

export default BlogPost