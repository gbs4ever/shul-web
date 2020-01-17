import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
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
              <a
                href="https://www.myzmanim.com/day.aspx?askdefault=1&vars=24685993&q=chestnut%20ridge"
                className="button scrolly"
              >
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
