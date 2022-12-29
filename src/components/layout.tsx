import * as React from 'react'
import { Link } from 'gatsby'
import type { HeadFC, PageProps } from 'gatsby'

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.scss'

type LayoutProps = {
    pageTitle: string,
    children: React.ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to='/' className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/about' className={navLinkText}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                    {children}
            </main>
        </div>
    )
}

export default Layout