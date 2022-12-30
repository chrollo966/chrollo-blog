import * as React from "react"
import { Link } from 'gatsby'
import type { HeadFC, PageProps } from "gatsby"

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt='A dog'
        src='https://plus.unsplash.com/premium_photo-1668208365386-4198381c6f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80'
      />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title='Home Page' />
