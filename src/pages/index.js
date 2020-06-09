import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import FrontImage from "gatsby-background-image"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Flex from "../components/Flex"
import ShopLogo from "../components/Logo"

// HEROIMAGE
const HeroImage = styled(FrontImage)`
  align-self: center;
  width: auto;
  height: 600px;
  margin-bottom: 56px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (min-width: 992px) and (max-width: 1024px) {
    height: 524px;
  }
  @media screen and (min-width: 767px) and (max-width: 991px) {
    height: 580px;
  }
  @media screen and (min-width: 414px) and (max-width: 766px) {
    height: 588px;
  }
  @media screen and (min-width: 375px) and (max-width: 413px) {
    height: 592px;
  }
  @media screen and (min-width: 320px) and (max-width: 374px) {
    height: 512px;
  }
`

const Overlay = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`

// CONTENTBOX
const ContentBox = styled(Flex)`
  height: 100%;
  max-width: 1080px;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 479px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`
const SubHero = styled.h3`
  font-size: 32px;
  font-family: sans-serif;
  font-weight: 200;
  color: white;
  width: 100%;
  text-align: center;
  margin: auto 0;
  @media screen and (min-width: 414px) and (max-width: 767px) {
    font-size: 32px;
    padding: 32px;
    width: 75%;
    align-self: center;
    text-align: center;
  }
  @media screen and (min-width: 375px) and (max-width: 413px) {
    font-size: 24px;
    padding: 24px;
    width: 50%;
    align-self: center;
    text-align: center;
  }
  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 24px;
    padding: 8px;
    width: 80%;
    align-self: center;
    text-align: center;
  }
`
// CONTENT
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1080px;
  margin: 0 auto;
  @media screen and (min-width: 320px) and (max-width: 1024px){
    padding: 32px;
  }
`

// CONTENT-CATCH
const CatchWrapper = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  margin-bottom: 56px;
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`
const CatchParagraph = styled.section`
  h2 {
    font-size: 48px;
    font-weight: 700;
    text-align: left;
    align-self: left;
    margin: 0 auto; 
    margin-bottom: 16px;
    padding: 16px;
    width: 15vw;
    @media screen and (min-width: 320px) and (max-width: 1280px){
      font-size: 40px;
      text-align: center;
      align-self: center;
      width: 100%;
    }
  }
  p {
    margin: 0 auto; 
    font-weight: 200;
    text-align: justify;
    padding: 24px;
    width: 15vw;
    @media screen and (min-width: 320px) and (max-width: 1280px){
      font-size: 16px;
      font-weight: 300;
      text-align: justify;
      align-self: center;
      margin-bottom: 24px;
      width: 50%;
    }
  }
`
const CatchImage = styled(Img)`
  display: block;
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 786px){
    height: auto;
  }
`
// CONTENT-SALES
const SalesCatch = styled.div`
  padding: 24px;
  text-align: center;
  margin-bottom: 24px;
  h3 {  
    font-size: 48px;
  }
  p {
    font-size: 24px;
    font-weight: 200;
  }
`
const SalesWrapper = styled(Flex)`
  @media screen and (max-width: 768px) {
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
  color: $paragraph;
`
const SalesParagraph = styled.p`
  color: $paragraph;
  text-align: justify;
`
const IndexPage = props => {
  const [catchImage, heroImage] = props.data.allFile.edges
  return (
    <Layout hasHero>
      <SEO
        title="George and the Bear"
        keywords={[`vinyl`, `records`, `coffee`, `music`]}
      />
      <HeroImage fluid={heroImage.node.childImageSharp.fluid}>
        <Overlay>
          <ContentBox
            flexDirection="row"
            justifyContent="center"
          >
            <ShopLogo />
            <SubHero>
              – "Record collecting is an infinite journey backwards" –
            </SubHero>
          </ContentBox>
        </Overlay>
      </HeroImage>
      <Content>
        <CatchWrapper>
          <CatchParagraph>
            <h2>Yes sir, we have black gold</h2>
            <p>George and the Bear is een platenwinkel waar de muziekliefhebber zich thuis voelt, waar men in een unieke sfeer kan luisteren naar muziek, de krant kan lezen of zich kan verdiepen in muziekliteratuur.</p>
          </CatchParagraph>
          <CatchImage fluid={catchImage.node.childImageSharp.fluid} />
          <CatchParagraph>
            <p> Naast de nieuwste releases, die op de voet gevolgd worden, beschikken we ook over een ruim assortiment van tweedehandsplaten en de must-have klassiekers in zowat alle genres.</p>
          </CatchParagraph>
        </CatchWrapper>
        <SalesCatch>
          <h3>In vinyl we trust</h3>
          <p>– You want it, we got it –</p>
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
            <SalesParagraph>
              Heb je thuis nog een oude platencollectie staan waar je vanaf wil? Wij nemen hem graag van je over! Indien je nog vinyl hebt om door te verkopen, mag je gerust even binnenspringen in de winkel of contact met ons opnemen, zodat we kunnen bekijken welke samenwerking mogelijk is.
            </SalesParagraph>
          </SalesSection>
        </SalesWrapper>
      </Content>
    </Layout>
  )
}

export const indexImages = graphql`
  query indexImages {
    allFile(filter: {relativeDirectory: {eq: "images/index"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
export default IndexPage
