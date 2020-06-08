import React from 'react'
import { Link, graphql } from 'gatsby'
import { Image } from 'cloudinary-react'
import Flex from '../components/Flex'
import styled from 'styled-components'
import Layout from '../components/Layout'
import ReactCountryFlag from 'react-country-flag'

const RecordImage = styled(Image)`
  display: block;
`
const PageHead = styled(Flex)`
  max-width: 1080px;
  padding: 24px;
  border-top: 2px solid black;
  border-bottom: 2px solid black; 
  margin: 24px 0;
`
const TitleWrapper = styled(Flex)`
  padding: 0;
  h2 {
    font-size: 32px;
    margin-bottom: 0;
  }
  h3 {
    font-size: 16px;
    font-weight: 300;
  }
`
const ArtistLink = styled(Link)`
  color: red;
`

const RecordPage = ({ data }) => {
  const { title, price, artist, image, band_origin, country_code } = data.markdownRemark.frontmatter
  return (

    <Layout>
      <PageHead justifyContent="space-between" alignItems="center">
        <Link to="/shop">&lt; Ga terug</Link>
        <TitleWrapper flexDirection="column" alignItems="right">
          <h2>{title}</h2>
          <ArtistLink to="/">{artist}</ArtistLink>
        </TitleWrapper>
        <Link to="/">Go To &gt;</Link>
      </PageHead>
      <RecordImage
        cloudName="bnulens"
        publicId={image}
        secure="true"
      />
      <div>{price}</div>
      <ReactCountryFlag
        className="emojiFlag"
        countryCode={country_code}
        aria-label={band_origin}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        price
        artist
        image
        band_origin
        country_code
      }
    }
  }
`
export default RecordPage
