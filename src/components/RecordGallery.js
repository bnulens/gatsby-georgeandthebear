import React from 'react'
import '../scss/recordGallery.scss'
import {useStaticQuery, graphql} from 'gatsby'
const RecordGallery = () => {
    const data = useStaticQuery(graphql`
    query recordImageQuery {
        allCloudinaryAsset {
          edges {
            node {
              id
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }`
    )
    const clImages = data.allCloudinaryAsset.edges
    return (
        <div>
          <div className="image-grid">
            {clImages.map((image, index) => (
                  <div className="image-item" key={`${index}-cl`}>
                    <img src={image.node.fluid.src} alt={"no alt :("} width="30" height="30"/>
                  </div>
                ))
            }
          </div>
        </div>
      )
  }
  export default RecordGallery