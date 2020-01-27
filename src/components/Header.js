import React from 'react'
import Logo from './Logo'
class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <Logo />
        <div className="inner">
          {/* <span className="icon major fa-cloud"></span> */}

          <ul className="actions">
            <li>
              <a
                href="https://secure.cardknox.com/torahutfilla"
                className="button scrolly"
              >
                Donations & Dedications
              </a>
            </li>
            <li>
              <a href="#three" className="button scrolly">
                Zmanim
              </a>
            </li>

            <li>
              <a href="#five" className="button scrolly">
                Shul Information
              </a>
            </li>
            <li>
              <a href="#four" className="button scrolly">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
