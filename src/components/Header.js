import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          {/* <span className="icon major fa-cloud"></span> */}

          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Donate & Dedications
              </a>
            </li>
            <li>
              <a href="#one" className="button scrolly">
                Zmanim
              </a>
            </li>

            <li>
              <a href="#five" className="button scrolly">
                Shul Information
              </a>
            </li>
            <li>
              <a href="#one" className="button scrolly">
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
