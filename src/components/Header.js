import React from 'react'

import Zmanim from './Zmanim'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 150)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className={`body ${this.state.loading}`}>
          <section id="header">
            <Zmanim />
            <div className="inner">
              {/* <span className="icon major fa-cloud"></span> */}

              <ul className="actions">
                <li>
                  <a href="#two" className="button scrolly">
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
        </div>
      </div>
    )
  }
}

export default Header
