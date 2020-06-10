import React from "react"
import { Link } from "gatsby"
import { Image } from "cloudinary-react"
import Flex from "../components/Flex"
import styled from "styled-components"
import ReactCountryFlag from "react-country-flag"

const StyledWrapperLink = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 auto;
`
const ImageOverlay = styled(Flex)`
    display: block;
    position: absolute;
    padding: 48px;
    height: 300px;
    width: 300px;
    border: 1px solid red;
    ${'' /* -webkit-box-shadow: 0px 0px 30px 3px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 30px 3px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 30px 3px rgba(0,0,0,0.1); */}
    
    h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        height: 30px;
        margin: 0;
    }
    p {
        margin-bottom: 24px;
        font-weight: 200;
        width: 300px;
    }
    span {
        width: 300px;
    }
    span.emojiFlag {
        font-size: 40px !important;
        width: 300px;
        margin: auto 0;
    }
`

const Record = ({ record }) => {
    const { title, image, price, artist, band_origin, country_code } = record.node.frontmatter;
    const { slug } = record.node.fields;
    return (
        <StyledWrapperLink to={slug}>
            <Image
                cloudName="bnulens"
                publicId={image}
                width="300"
                height="300"
                secure="true"
            />
            <ImageOverlay
                flexDirection="column"
                justifyContent="space-around"
            // className={hasPointer() ? "seeInfo" : "seeImage"}
            >
                <h3>{title}</h3>
                <p>{artist}</p>
                <span>€ {price}</span>
                <ReactCountryFlag
                    className="emojiFlag"
                    countryCode={country_code}
                    aria-label={band_origin}
                />
            </ImageOverlay>
        </StyledWrapperLink>
    )
}

export default Record;
