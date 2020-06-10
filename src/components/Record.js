import React, { useState } from "react"
import { Link } from "gatsby"
import { Image } from "cloudinary-react"
import Flex from "../components/Flex"
import styled from "styled-components"
import ReactCountryFlag from "react-country-flag"

const StyledWrapperLink = styled(Link)`
  display: block;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

const Wrapper = styled.div`
  height: 300px;
  width: 300px;
  perspective: 1000px;

  &:hover ${StyledWrapperLink} {
    transform: rotateY(180deg);
  }
`

const RecordFront = styled(Image)`
  height: 300px;
  width: 300px;
  backface-visibility: hidden;
`

const RecordBack = styled.div`
  position: absolute;
  top: 0;
  height: 300px;
  width: 300px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`
const RecordInfo = styled(Flex)`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: blue;
  color: white;

  h3 {
    width: 100%;
    height: 30px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
  }

  p {
    width: 300px;
    margin-bottom: 24px;
    font-weight: 200;
    color: white;
  }

  span {
    display: block;
  }

  span.emojiFlag {
    width: 300px;
    font-size: 40px !important;
  }
`

const Record = ({ record }) => {
  const {
    title,
    image,
    price,
    artist,
    band_origin,
    country_code,
  } = record.node.frontmatter
  const { slug } = record.node.fields

  return (
    <Wrapper>
      <StyledWrapperLink to={slug}>
        <RecordFront
          cloudName="bnulens"
          publicId={image}
          width="300"
          height="300"
          secure="true"
        />
        <RecordBack>
          <RecordInfo
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <h3>{title}</h3>
            <p>{artist}</p>
            <span>€ {price}</span>
            <ReactCountryFlag
              className="emojiFlag"
              countryCode={country_code}
              aria-label={band_origin}
            />
          </RecordInfo>
        </RecordBack>
      </StyledWrapperLink>
    </Wrapper>
  )
}

export default Record
