import * as React from 'react'
import { Link } from 'gatsby'
import type { PageProps, HeadFC } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle='About me'>
            <p>This is my introduction.</p>
        </Layout>
    )
}

export const Head: HeadFC = () => <Seo title='About me' />

export default AboutPage