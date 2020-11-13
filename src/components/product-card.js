import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import CoffeePlant from "../assets/images/coffee-plant-1.svg"

const ProductCard = ({ data }) => {
  return (
    <div className="bg__pri br4 overflow-hidden relative flex flex-column pb3 card__card hide-child">
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
  )
}

export default ProductCard
