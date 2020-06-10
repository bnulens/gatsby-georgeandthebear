import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Record from "./Record.js"

const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 10px;
  grid-auto-flow: row dense;
  @media screen and (max-width: 888px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 648px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const RecordList = () => {
  const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
              filter: { frontmatter: { type: { eq: "record" }, price: { ne: 0 } } }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    price
                    image
                    artist
                    band_origin
                    country_code
                  }
                  fields {
                    slug
                  }
                }
              }
            }
        }
    `)
  const records = data.allMarkdownRemark.edges
  return (
    <Grid>
      {
        records.map(node => {
          return (
            <Record record={node} key={node.id} />
          )
        })
      }
    </Grid>
  )
}
export default RecordList;