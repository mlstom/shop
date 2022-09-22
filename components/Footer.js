import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  
`


const Footer = () => {
  return (
    <Main>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Company</h1>

          <h2>Contact</h2>

          <address>
            11000 Beograd In. The World <br/>

              <a className="footer__btn" href="mailto:info@gmail.com" >Email Us</a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>


          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2022 Company. All rights reserved.</p>

          <div className="legal__links">
            <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
          </div>
        </div>
      </footer>
    </Main>
  )
}

export default Footer