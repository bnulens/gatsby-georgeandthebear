import React from 'react'
import { Link, graphql } from 'gatsby'
import { Image } from 'cloudinary-react'
import Flex from '../components/Flex'
import styled from 'styled-components'
import Layout from '../components/Layout'
import ReactCountryFlag from 'react-country-flag'
import records from '../records.json';

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

const RecordInfo = styled.div`
  width: 50%;
  border-bottom: 1px solid black;
  @media screen and (max-width: 1080px) {
    width: 100%;
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
const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const TrackList = styled.ol`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: decimal !important;
`

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
`
const RecordPage = ({ data }) => {
  const { title, price, artist, image, band_origin, country_code } = data.markdownRemark.frontmatter
  const formattedArtist = artist.toLowerCase().split(' ').join('-');
  const formattedAlbum = title.toLowerCase().split(' ').join('-');
  const formattedKey = `${formattedArtist}-${formattedAlbum}`;
  const songs = records[formattedKey].songs;

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
      <RecordWrapper justifyContent="space-between" alignItems="flex-start">
        <ImageWrapper>
          <RecordImage
            cloudName="bnulens"
            publicId={image}
            secure="true"
            height="500"
            width="500"
          />
        </ImageWrapper>
        <RecordInfo>
          <Flex justifyContent="space-between" alignItems="center">
            <div>{price}</div>
            <ReactCountryFlag
              className="emojiFlag"
              countryCode={country_code}
              aria-label={band_origin}
            />
          </Flex>
          <p>Though a grunge record, Ten's musical style is influenced by classic rock and combines an "expansive harmonic vocabulary" with an anthemic sound.[1] While it deals with dark subject matter, it has generally been seen as a landmark of the early 1990s alternative rock sound, with Vedder's unusually deep and strong voice alternating between solidity and vibrato against the unrestrained, guitar-heavy, hard rock sound that drew influence from rock bands of the 1970s. </p>
          <TagList>
            <li>Example Tag</li>
            <li>Example Tag</li>
            <li>Example Tag</li>
          </TagList>
          <TrackList>
            {songs.map((song, i) => {
              return (
                <StyledListItem key={song.name}><span>{i + 1}. {song.name}</span><span>{song.length}</span></StyledListItem>
              )
            })}
          </TrackList>
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
