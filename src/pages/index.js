import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import handrail from '../images/handrail_closeup.jpg'

import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" keywords={[`Marcus Welds`, `welding`, `metal fabrication`, `custom bumpers`, `generator box` ]} />
    <ul>
        {/* <img src={handrail} alt="" /> */}
        {data.images.edges.map((image, index) => {
          return <li key={`image-${index}`}>
            {/* <Img fluid={image.node.childImageSharp.fluid} /> */}
          </li>
        })
      }
    </ul>
  </>
)

export default IndexPage

export const pageQuery = graphql`
  {
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
