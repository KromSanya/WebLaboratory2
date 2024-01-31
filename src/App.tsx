// import { useState } from 'react'
import svgLogo from './assets/react.svg'
import './App.css'
import './fonts/muli/muli.css'

import health from './assets/header illustration 1.png'
import sec02 from './assets/illustration sec02 1.png'
import sec03 from './assets/illustration sec03 1.png'

import Banner from './Banner'
import Cardholder from './Cardholder'
import Articles from "./Articles/Articles.tsx";
import Slider from "./Slider.tsx";


function App() {
  // const [count, setCount] = useState(0)

  return (
      <>

        <div className='contentDiv'>
          <header>
            <div>
              <h1>
                <img src={svgLogo} alt="Логотип HealthCare"/>
                HealthCare
              </h1>
            </div>
            <nav>
              <a>Home</a>
              <a>Find a doctor</a>
              <a>Apps</a>
              <a>Testimonials</a>
              <a>About us</a>
            </nav>
          </header>
          {Banner("Virtual healthcare for you", "Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone", health, "Consult today")}
          {Cardholder()}
          {Banner("Leading healthcare providers", "We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver", sec02, "Learn more", true, true)}
          {Banner("Download our \n" +
              "mobile apps",
              "Our dedicated patient engagement app and \n" +
              "web portal allow you to access information instantaneously (no tedeous form, long calls, \n" +
              "or administrative hassle) and securely", sec03, "Download ↓", false, true)}

          {Slider()}
          {Articles()}


        </div>
        <footer>
          <div>

            <h6>
              <img src={svgLogo}></img>
              HealthCare
            </h6>
            <p>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for
              everyone</p>
            <p>©HealthCare PTY LTD 2023. All rights reserved</p>
          </div>
          <div>
            <h6>Company</h6>

            <a>About</a>
            <a>Testimonials</a>
            <a>Find a doctor</a>
            <a>Apps</a>
          </div>
          <div>
            <h6>Region</h6>
            <a>Indonesia</a>
            <a>Singapore</a>
            <a>Hongkong</a>
            <a>Canada</a>
          </div>
          <div>
            <h6>Help</h6>
            <a>Help Center</a>
            <a>Contact support</a>
            <a>Instructions</a>
            <a>How it works</a>
          </div>
        </footer>
      </>
  )
}

export default App
