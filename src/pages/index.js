import React, { useCallback, useEffect } from "react"
import { graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import Mark from "../assets/images/mark.svg"
import Layout from "../components/layout"
import CoffeeGroup from "../assets/images/beans-1.svg"
import CoffeePlant from "../assets/images/coffee-plant-1.svg"
import CupsGroup from "../assets/images/cups-1.svg"
import Car from "../assets/images/car.svg"

const HomePage = ({ data }) => {
  const docs = data.docs.edges

  // const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  const onScroll = useCallback(e => console.dir(e.target))
  return (
    <div className="app bg__pri">
      <Layout>
        <div
          onScroll={onScroll}
          className="cover hero__img bg-center-l"
          style={{ backgroundImage: "url(/hero-sup.png)" }}
        >
          <div className="flex justify-center absolute mark hero w-100 top--1 z-0">
            <Mark />
          </div>
          <div className="pt6 pl6-l vh-100">
            <div className="ph3-l ph5 pv5">
              <h2 className="fw2 f2  mt3 ma0  script">Coffee made with Love</h2>
              <div className="f-5-l  f1  head ma0 mb4">
                Fall in love with Luv&nbsp;Coffee
              </div>
              <Link
                swipe
                direction="left"
                to="shop"
                className="btn btn__pri dib no-underline ph3 pv2 mb3"
              >
                Find Your New Brew
              </Link>
            </div>
          </div>
          <div className="relative">
            <CoffeeGroup className="absolute bottom--3 right-0 o-30" />
            <h3 className="script color__pri f-5 tc">Featured</h3>
            {/* feature card */}
            <div className="br4 flex flex-wrap  bg__pri mh5-l mh2 mb4 relative h-75 h-100-l">
              <div className="fl w-50-l w-100 h-100 overflow-hidden br4 flex-grow-1 flex justify-center items-center">
                <div className="w-100 h-100">
                  <Img
                    fluid={data.featuredCoffeeImg.childImageSharp.fluid}
                    objectFit="cover"
                    className=""
                  />
                </div>
              </div>

              <div className="fl w-50-l w-100  pl5-ns pt5 pb6 pa3">
                <div className="f4 script mb2">Single Origin</div>
                <div className="f2 head mb2">Burundi Yandaro</div>
                <div className="f4 head mb5">Nectarine, Apple, Orange</div>
                <button className="btn btn__pri">Add To Cart</button>
                <div className="absolute w-20 right-0 bottom-1">
                  <Img
                    fluid={data.featuredFlavorImg.childImageSharp.fluid}
                    objectFit="contain"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg__tri pb6 pv5">
          <h3 className="f3 script tc mb0">Subscribe and Save</h3>
          <div className="f2 tc head mt0">Choose</div>
          <div className="flex flex-wrap flex-column flex-row-l mt5 justify-around">
            <div className="relative pa2 mv5">
              <CoffeeGroup className="center__abs o-30" />
              <div className="head f2 tc ">Your Beans</div>
              {/* <div className="body">
                Get your favorite or favorite of the week. Change your
                subscription any time
              </div> */}
            </div>
            <div className="relative pa2 mv5">
              <CupsGroup className="center__abs o-30" />
              <div className="head f2 tc">You Amount</div>
            </div>
            <div className="relative pa2 mv5">
              <Car className="center__abs o-30" />
              <div className="head f2 tc">Get it and Enjoy</div>
            </div>
          </div>
        </div>
        <div className="  pv5 bg__light">
          <div className="f2 tc head">Our Beans and Blends</div>
          <div className="flex mh3 justify-around flex-row-l flex-column ">
            {/* card start */}
            <div className="w-30-l mv3 bg__pri br4 overflow-hidden relative flex flex-column pb3 card__card hide-child">
              <Img
                fluid={data.CoffeeImg.childImageSharp.fluid}
                objectFit="contain"
                className=""
              />
              <div className="ma3 z-1">
                <div className="script f5">Single Origin</div>
                <div className="head f3 flex justify-between">
                  <div>Columbia Washed</div>
                  <div>$18</div>
                </div>
                <div className="script f6">Apple, Lime, Honey</div>
                <div className="btn btn__pri mt3 z-1 child">Add Cart</div>
              </div>
              <CoffeePlant class="absolute o-40 z-0" />
            </div>
            {/* card end */}
            <div className="w-30-l mv3 bg__pri br4 overflow-hidden relative flex flex-column pb3 hide-child card__card">
              <Img
                fluid={data.CoffeeImg.childImageSharp.fluid}
                objectFit="contain"
                className=""
              />
              <div className="ma3 z-1">
                <div className="script f5">Single Origin</div>
                <div className="head f3 flex justify-between">
                  <div>Columbia Washed</div>
                  <div>$18</div>
                </div>
                <div className="script f6">Apple, Lime, Honey</div>
                <div className="btn btn__pri mt3 z-1 child">Add Cart</div>
              </div>
              <CoffeePlant class="absolute o-40 z-0" />
            </div>
            <div className="w-30-l mv3 bg__pri br4 overflow-hidden relative flex flex-column pb3 hide-child card__card">
              <Img
                fluid={data.CoffeeImg.childImageSharp.fluid}
                objectFit="contain"
                className=""
              />
              <div className="ma3 z-1">
                <div className="script f5">Single Origin</div>
                <div className="head f3 flex justify-between">
                  <div>Columbia Washed</div>
                  <div>$18</div>
                </div>
                <div className="script f6">Apple, Lime, Honey</div>
                <div className="btn btn__pri mt3 z-1 child">Add Cart</div>
              </div>
              <CoffeePlant class="absolute o-40 z-0" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    CoffeeImg: file(relativePath: { eq: "coffee-product-img-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
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
    featuredFlavorImg: file(relativePath: { eq: "nectarine-img-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    docs: allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            categories
            description
            path
          }
        }
        next {
          id
        }
        previous {
          id
        }
      }
    }
  }
`
