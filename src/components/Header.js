import React from 'react'
import entrance from '../assets/images/entrance.jpeg'
import Zmanim from './Zmanim'
// let sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: `url(${entrance})`
// };
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
      <div className="welcomer">
        <div className="wrapper">
          <div className={`body ${this.state.loading}`}>
            <section id="header">
              <Zmanim />
              <div className="inner">
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
      </div>
    )
  }
}

export default Header
