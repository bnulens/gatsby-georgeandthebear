import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  ${'' /* margin: auto 0; */}
  flex: 0 1 38px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "georgeandthebear-white" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 500, pngQuality: 100) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)
  return (
    <LogoWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  )
}

export default Logo