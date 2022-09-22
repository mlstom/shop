import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  
`


const Footer = () => {
  return (
    <Main>
      <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">Company</h1>

          <h2>Contact</h2>

          <address>
            11000 Beograd In. The World <br/>

              <a class="footer__btn" href="mailto:info@gmail.com" >Email Us</a>
          </address>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Media</h2>

            <ul class="nav__ul">
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


          <li class="nav__item">
            <h2 class="nav__title">Legal</h2>

            <ul class="nav__ul">
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

        <div class="legal">
          <p>&copy; 2022 Company. All rights reserved.</p>

          <div class="legal__links">
            <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
          </div>
        </div>
      </footer>
    </Main>
  )
}

export default Footer