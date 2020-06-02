import React from "react"
import { graphql } from "gatsby"

const RecordPage = ({ data }) => {
  const { title, price, artist } = data.markdownRemark.frontmatter

  return (
    <>
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
