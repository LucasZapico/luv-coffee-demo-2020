import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ProductCard from "../components/product-card"
import Layout from "../components/Layout"

const demoArr = [1, 2, 3, 4, 5]

const ShopPage = ({ data }) => {
  return (
    <Layout>
      <div className="bg__light">
        <header className="bg__quad overflow-hidden relative">
          <div className="w-100 h5 overflow-hidden right-0 z-0">
            <Img
              fluid={data.PatternImg.childImageSharp.fluid}
              objectFit="contain"
              className=""
            />
          </div>
          <div className="absolute top-0 left-0 w-100 h-100">
            <div className="f1 head mh3 pv5 pt6 mt5 z-1 ">Our Coffee</div>

            {/* <div className="head flex">
          <div>filter by</div>
          <div>Coffee Type</div>
        </div> */}
          </div>
        </header>
        {/* <div className="absolute top-2 right--2 w-30 z-0 ">
          <Img
            fluid={data.BeansImg.childImageSharp.fluid}
            objectFit="contain"
            className=""
          />
        </div> */}
        <div className="mv3 flex flex-wrap justify-start bg__light pv5 z-0">
          {demoArr.map(i => (
            <div className="w-30-l w-100 mv3 mh3">
              <ProductCard key={i} data={data} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ShopPage

export const pageQuery = graphql`
  query {
    CoffeeImg: file(relativePath: { eq: "coffee-product-img-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BeansImg: file(relativePath: { eq: "beans-group-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PatternImg: file(relativePath: { eq: "pattern-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1050) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featuredCoffeeImg: file(relativePath: { eq: "coffee-product-img-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
