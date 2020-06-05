import React from "react"
import { Link, graphql } from "gatsby"
import { Image } from "cloudinary-react"

const RecordPage = ({ data }) => {
  const { title, price, artist, image } = data.markdownRemark.frontmatter

  return (
    <>
      <Link to="/shop">&lt; Ga terug</Link>
      <Image
        cloudName="bnulens"
        publicId={image}
        width="300"
        height="300"
        secure="true"
      />
      <div>{title}</div>
      <div>{price}</div>
      <div>{artist}</div>
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
