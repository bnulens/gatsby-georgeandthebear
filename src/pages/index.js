import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

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
  padding: 86px 0;
`
const Catch = styled.section`
  max-width: 100%;
  margin-bottom: 24px;
`
const CatchParagraph = styled.section`
  h2 {
    margin: 0 auto; 
    align-self: center;
    width: 50%;
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  p {
    margin: 0 auto; 
    align-self: center;
    width: 50%;
    font-weight: 200;
  }
`

const SalesCatch = styled.div`
  padding: 24px;
  text-align: center;
  margin-bottom: 24px;
  h3 {  
    font-size: 48px;
  }
  span {
    font-size: 24px;
    font-weight: 200;
  }
`
const SalesWrapper = styled(Flex)`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
const SalesSection = styled.section`
  font-weight: 300;
  font-size: 18px;
  width: 100%;
  height: auto;
  padding: 24px;
  margin-bottom: 24px;
`
const SalesTitle = styled(Link)`
  display: block;
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #051313;
`
const SalesParagraph = styled.p`
  text-align: justify;
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
      <Catch>
        <CatchParagraph>
          <h2>YES SIR, WE HAVE BLACK GOLD!</h2>
          <p>George and the Bear is een platenwinkel waar de muziekliefhebber zich thuis voelt, waar men in een unieke sfeer kan luisteren naar muziek, de krant kan lezen of zich kan verdiepen in muziekliteratuur. Naast de nieuwste releases, die op de voet gevolgd worden, beschikken we ook over een ruim assortiment van tweedehandsplaten en de must-have klassiekers in zowat alle genres.</p>
        </CatchParagraph>
      </Catch>
      <SalesCatch>
        <h3>In vinyl we trust</h3>
        <span>You want it, we got it</span>
      </SalesCatch>
      <SalesWrapper>
        <SalesSection>
          <SalesTitle to="/shop">We have the right record for everyone...</SalesTitle>
          <SalesParagraph>
            George and the Bear biedt muziekliefhebbers een ruim aanbod aan vinyl, met genres variërend van rock, pop, punk, jazz, blues, hardcore, indie, new wave en metal tot house, techno, dance of hiphop. Een groot deel van de collectie bestaat uit tweedehandsplaten in goede staat - maar ook de nieuwste releases kan je in onze rekken terugvinden.
          </SalesParagraph>
        </SalesSection>
        <SalesSection>
          <SalesTitle to="/about">...we also love to buy yours!</SalesTitle>
          <br />
          <SalesParagraph>
            Heb je thuis nog een oude platencollectie staan waar je vanaf wil? Wij nemen hem graag van je over! Indien je nog vinyl hebt om door te verkopen, mag je gerust even binnenspringen in de winkel of contact met ons opnemen, zodat we kunnen bekijken welke samenwerking mogelijk is.
          </SalesParagraph>
        </SalesSection>
      </SalesWrapper>
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
