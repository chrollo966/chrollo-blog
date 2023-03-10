import type { GatsbyConfig } from "gatsby"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import path from "path"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Krollo Blog`,
    siteUrl: `https://chrolloblogmain.gatsbyjs.io/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-vanilla-extract`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: path.resolve(`blog`),
      },
    },
    `gatsby-transformer-sharp`,
  ],
}

export default config
