import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import styled from "styled-components"
import FrontImage from "gatsby-background-image"

import Flex from "../components/Flex"

const HeroImage = styled(FrontImage)`
  align-self: center;
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Overlay = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`

const ContentBox = styled(Flex)`
  height: 100%;
  max-width: 1080px;
  margin: 0 auto;
`

const HeroTitle = styled.h1`
  font-size: 118px;
  font-family: serif;
  color: white;
  text-align: right;
  margin: auto 0;
`

const SubHero = styled.h3`
  font-size: 28px;
  font-family: sans-serif;
  font-weight: 200;
  color: white;
  width: 25%;
  text-align: justify;
  align-self: right;
  margin: auto 0;
`

const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  border: 1px solid black;
  padding: 48px 0;
`

const IndexPage = props => (
  <Layout hasHero>
    <SEO
      title="George and the Bear"
      keywords={[`vinyl`, `records`, `coffee`, `music`]}
    />
    <HeroImage fluid={props.data.heroImage.childImageSharp.fluid}>
      <Overlay>
        <ContentBox
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="right"
        >
          <HeroTitle>
            George and
            <br />
            the Bear
          </HeroTitle>
          <SubHero>
            – "Record collecting is an infinite journey backwards" –
          </SubHero>
        </ContentBox>
      </Overlay>
    </HeroImage>
    <Content>
      <p></p>
    </Content>
  </Layout>
)

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "images/hero-background2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
