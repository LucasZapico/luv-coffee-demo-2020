import React, { useState } from "react"
import { IoIosHeart, IoIosOpen } from "react-icons/io"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"

const Footer = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <footer className="footer container bg__tri pa3">
      <div className="footer">
        <div className="form subscribe mt4">
          <div className="f3 tc">Subscribe to See What We're Cooking</div>
          <div className="f5 script tc">
            This is a demo and does not actually subscribe!
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-80 flex flex-row-l flew-column justify-center center mb5 mt3  "
          >
            {/* include validation with required or other standard HTML validation rules */}
            <div className="br4  flex overflow-hidden w-100">
              <input
                name="email"
                className="email f2 w-90 head pv3 "
                autoComplete="false"
                ref={register({ required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.email && <span>This field is required</span>}

              <input className="submit w-20 pv2 " type="submit" />
            </div>
          </form>
        </div>
        <div className="">
          <hr></hr>
          <div className="mv3">
            <div className="f3 head">Cheers</div>
            <div className="">
              <div className="">Let's build something unqiue.</div>
              <a target="_blank" href="mailto:business@lucaszapico.space">
                business@lucaszapico.space
              </a>
            </div>
          </div>
        </div>

        <div className="mv3 flex flex-column">
          <div className="f6 head">Other Places To Find Me</div>
          <div>
            <a href="https://design.lucaszapico.space" className="">
              Design.LucasZapico.space <IoIosOpen />
            </a>
          </div>
          <div>
            <a href="https://dev.lucaszapico.space" className="">
              Dev.LucasZapico.space <IoIosOpen />
            </a>
          </div>
        </div>

        <div>
          <div>
            Built with <IoIosHeart /> By Lucas Zapico
          </div>
          <div>
            {/*  */}
            Last-Modified: '2020/11/13'
            {/*  */}
          </div>
        </div>
        <div className="footer__policy flex justify-start pv3">
          {/* <div class="policy__item">
			Terms & Conditions
		</div> */}
          <div className="policy__item pa1">
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className="policy__item pa1">© Copyright 2020</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
