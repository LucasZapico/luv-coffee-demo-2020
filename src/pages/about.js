import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg__quad pt5 pb5">
        <div className="measure-wide center bg__light pa3 br3">
          <div className="f2 tc head mt5 mb2">About Demo</div>
          <div className="toc">
            <div className="f5 mb2 head">Table of Contents</div>
            <ul>
              <li>
                <a href="#what-is-this">What is this</a>
              </li>
              <li>
                <a href="#know-areas">Known areas for improvement</a>
              </li>
              <li>
                <a href="#credits">Credits</a>
                <ul>
                  <li>
                    <a href="#branding">Branding</a>
                  </li>
                  <li>
                    <a href="#design">Design</a>
                  </li>
                  <li>
                    <a href="#development">Development</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="body measure ">
            This was a power demo a-z. This means in a short time frame I
            designed the logo, color pallette, imagery and illustration and
            developed what you see here.
            <div className="f3 mb2 mt4" id="what-is-this">
              What this is?
            </div>
            This was an exercise to go through production with the objective of
            increase my pace and effectiveness. To go over the workflows;
            <ul className="mt2">
              <li>Logo creation</li>
              <li>UI design</li>
              <li>UX design</li>
              <li>Illustration Creation</li>
              <li>Imagery Curation and Editing</li>
              <li>Development</li>
            </ul>
            <div className="f3 mb2 mt4" id="know-areas">
              Known areas for improvement
            </div>
            <div className="measure">
              These are the things that didn't make in durning period I lotted
              for the projects, or features that need a some more love.
              <ul className="mt2">
                <li>I would like to make scroll to next section</li>
                <li>
                  I think there is room for some animations to enhance the
                  experience
                </li>
                <li>A coffee video on repeat would be a nice enhancement</li>
                <li>
                  Adding filter to the shop (this feature would be part of
                  integrating with shopify{" "}
                </li>
                <li>
                  Adding about coffee product page to give the audience more
                  information about the coffee and enhance the experience
                </li>
              </ul>
            </div>
            <div className="f3 mb2 mt4" id="credits">
              Credits
            </div>
            <div className="body measure ">
              <div className="f4 mb2 mt4">Branding</div>I use the term branding
              here softly as this project did not require true branding. For
              example, community position, market differentiation from a
              business and social perspective.
              <div className="f5 mb2 mt3">Mark/Logo</div>
              Concept and desgined by{" "}
              <a href="https://design.lucaszapico.space">Lucas Zapico</a>, there
              was a Pinterest search and some inspiration from my own person
              collection of Marks.
              <div className="f5 mb2 mt3">Color Palette</div>
              Inspiration for Color Palette{" "}
              <a href="https://www.colorsandfonts.com/color-palettes">
                Color and Fonts
              </a>
              <div className="f5 mb2 mt3">Typography</div>
              <a href="https://fonts.google.com/" className="db">
                Google Fonts
              </a>
              <a
                href="https://fonts.google.com/specimen/IM+Fell+Double+Pica"
                className="db"
              >
                IM Fell Double Pica - Script Type
              </a>
              <div className="f4 mb2 mt3" id="design">
                Design
              </div>
              <div className="f5 mb2 mt3">Photography</div>
              Photos found on{" "}
              <a href="https://unsplash.com/" className="">
                Unsplash
              </a>{" "}
              photo credit below;
              <span className="db">
                Photo by{" "}
                <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Nathan Dumlao
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
              <span className="db">
                Photo by{" "}
                <a href="https://unsplash.com/@lum3n?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  LUM3N
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/nectarine?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
              <span className="db">
                Photo by{" "}
                <a href="https://unsplash.com/@relentlessjpg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  William Moreland
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
              <br></br>A bit of photo hacking done with{" "}
              <a href="https://www.remove.bg/" className="">
                RemoveBackground
              </a>
              <div className="f5 mb2 mt3">UX</div>
              UX was mocked in <a href="https://figma.com">Figma</a> by{" "}
              <a href="https://design.lucaszapico.space">design.Lucas Zapico</a>
              . Though the user experience was relatively simple. I recently did
              a research pass on UX be practice for shopping experience and the
              main take away and driving force is to make the search and
              exploration of products navigable. This being said, I know it
              could be improved, but I am happy with the results from a power
              pass.
              <div className="f5 mb2 mt3">UI</div>
              UI was designed in <a href="https://figma.com">Figma</a> by{" "}
              <a href="https://design.lucaszapico.space">design.Lucas Zapico</a>
              <div className="f5 mb2 mt3">Illustration</div>
              UI was designed in <a href="https://figma.com">Figma</a> by{" "}
              <a href="https://design.lucaszapico.space">design.Lucas Zapico</a>
              <div className="f4 mb2 mt4" id="development">
                Development
              </div>
              All development was done by{" "}
              <a href="https://dev.lucaszapico.space">dev.Lucas Zapico</a>
              <div className="f5 mb2 mt3">Platform</div>
              <a href="https://www.gatsbyjs.com/">Gatsbyjs</a>
              <div className="f5 mb2 mt3">Icons</div>
              <a href="https://react-icons.github.io/react-icons/">
                React Icons
              </a>
              <div className="f5 mb2 mt3">CSS/SCSS</div>
              <a href="http://tachyons.io/">Tachyons</a>
              <div className="f5 mb2 mt3">Animations</div>
              <a href="https://www.react-spring.io/">React Spring</a>
            </div>
            <div className="f3 head mt3">
              If you got this far you're a legend! Stay classy from me to you!
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
