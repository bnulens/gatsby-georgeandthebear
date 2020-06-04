import React from "react"
import { graphql } from "gatsby"
import { Image } from "cloudinary-react"

const RecordPage = ({ data: record }) => {
  const { title, price, artist, image } = record.markdownRemark.frontmatter

  return (
    <>
      <div>{title}</div>
      <div>{price}</div>
      <div>{artist}</div>
      <Image
        cloudName="bnulens"
        publicId={image}
        width="300"
        height="300"
      //   fetchFormat="auto"
      // // secure="true"
      />
    </>
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
      }
    }
  }
`
export default RecordPage
