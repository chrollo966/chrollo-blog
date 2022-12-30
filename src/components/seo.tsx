import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

type SeoProps = {
    title: string | null | undefined,
}

const Seo = ({ title }: SeoProps) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <title>{(!typeof title) ? null : title} | {data.site.siteMetadata.title}</title>
    )
}

export default Seo