import React from "react"
import { Link, graphql } from "gatsby"
import { Image } from "cloudinary-react"
import styled from "styled-components"
import ReactCountryFlag from "react-country-flag"

import Flex from "../components/Flex"
import Layout from "../components/Layout"
import SplitList from "../components/SplitList"
import records from "../records.json"

const RecordImage = styled(Image)`
  display: block;
`
const PageHead = styled(Flex)`
  max-width: 1080px;
  padding: 24px;
  margin-bottom: 24px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`
const TitleWrapper = styled(Flex)`
  padding: 0;
  h2 {
    font-size: 32px;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 16px;
    font-weight: 300;
  }
`
const ArtistLink = styled(Link)`
  color: red;
`
const RecordWrapper = styled(Flex)`
  margin-bottom: 24px;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
  img {
    max-width: 100%;
    margin: 0 auto;
  }
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`

const RecordInfo = styled(Flex)`
  width: 50%;
  border-bottom: 1px solid black;

  @media screen and (max-width: 1080px) {
    width: 100%;
    padding: 0 32px;
    margin-top: 24px;
  }

  p {
    font-size: 16px;
    padding: 8px 0;
    margin-bottom: 16px;
    text-align: justify;
  }
`

const PriceCountryInfo = styled(Flex)`
  margin-bottom: 8px;
  font-size: 32px;
  font-weight: bold;

  span.emojiFlag {
    font-size: 2em !important;
  }
`

const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    font-size: 16px;
    font-weight: bold;
  }
`

const RecordPage = ({ data }) => {
  const {
    title,
    price,
    artist,
    image,
    band_origin,
    country_code,
  } = data.markdownRemark.frontmatter
  const formattedArtist = artist.toLowerCase().split(" ").join("-")
  const formattedAlbum = title.toLowerCase().split(" ").join("-")
  const formattedKey = `${formattedArtist}-${formattedAlbum}`
  const songs = records[formattedKey].songs

  return (
    <Layout>
      <PageHead justifyContent="space-between" alignItems="center">
        <Link to="/shop">&lt; Ga terug</Link>
        <TitleWrapper flexDirection="column" alignItems="center">
          <h2>{title}</h2>
          <ArtistLink to="/">{artist}</ArtistLink>
        </TitleWrapper>
        <Link to="/">Go To &gt;</Link>
      </PageHead>
      <RecordWrapper justifyContent="space-between" alignItems="stretch">
        <ImageWrapper>
          <RecordImage
            cloudName="bnulens"
            publicId={image}
            secure="true"
            height="500"
            width="500"
          />
        </ImageWrapper>
        <RecordInfo flexDirection="column" justifyContent="space-between">
          <PriceCountryInfo justifyContent="space-between" alignItems="center">
            <div>&euro; {price}</div>
            <ReactCountryFlag
              className="emojiFlag"
              countryCode={country_code}
              aria-label={band_origin}
            />
          </PriceCountryInfo>
          <p>
            Though a grunge record, Ten's musical style is influenced by classic
            rock and combines an "expansive harmonic vocabulary" with an
            anthemic sound. While it deals with dark subject matter
          </p>
          <TagList>
            <li>Example Tag</li>
            <li>Example Tag</li>
            <li>Example Tag</li>
          </TagList>
          <SplitList list={songs} />
        </RecordInfo>
      </RecordWrapper>
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
