import React from 'react'
import { Link } from 'gatsby'
import { Image } from 'cloudinary-react'
import styled from 'styled-components'
import ReactCountryFlag from "react-country-flag"

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 auto;
    h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const Record = ({ record }) => {
    const { title, image, price, artist, band_origin, country_code } = record.node.frontmatter;
    const { slug } = record.node.fields;
    return (
        <StyledLink to={slug}>
            <Image
                cloudName="bnulens"
                publicId={image}
                width="300"
                height="300"
                fetchFormat="auto"
                secure="true"
            />
            <h3>{title}</h3>
            <p>{artist}</p>
            <p>€ {price}</p>
            <ReactCountryFlag
                className="emojiFlag"
                countryCode={country_code}
                aria-label={band_origin}
            />
        </StyledLink>
    )
}

export default Record;
