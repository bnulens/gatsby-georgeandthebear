import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./Footer"
import "../scss/global.scss"

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`

const Layout = ({ children, hasHero }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {hasHero ? (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </>
      ) : (
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Wrapper>
              <main>{children}</main>
            </Wrapper>
            <Footer />
          </>
        )
      }
    </>
  )
}

Layout.propTypes = {
  hasHero: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  hasHero: false
}

export default Layout
