import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import ShulInfo from '../components/ShulInfo.js'
import Donation from '../components/Donation.js'
import shul from '../assets/images/shul.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Bais Medrash Torah Utfilla'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="two" className="main style4 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <Donation />
            </div>
          </div>
        </section>

        <section id="three" className="main style3 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2> Weekday Zmanim</h2>
              </header>
              <a
                className="button"
                href="https://www.myzmanim.com/day.aspx?askdefault=1&vars=24685993&q=chestnut%20ridge"
              >
                My zmanim{' '}
              </a>
            </div>

            <div className="col-4">
              <h3>Shacharis</h3>
              <ul className="actions">
                <li>Sun: 7:30, 8:30</li>
                <li>Mon -Fri: 6:45, 7:30</li>
              </ul>
            </div>
            <div className="col-4">
              <h3>Mincha</h3>
              <ul className="actions">
                <li>Sun: 12:45, 1:45, 10 min bfr Shkia</li>
                <li>Mon - Thurs: 1:45 , 10 min bfr Shkia</li>
              </ul>
            </div>
            <div className="col-4">
              <h3>Marriv</h3>
              <ul className="actions">
                <li>Shkia, 8:15, 9:45</li>
                <h4> Come join us for learning Chaburas </h4>
                <li>8:30 -9:45pm</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Do you want to receive the weekly shul newsletter ?</h2>
            </header>

            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section id="five" className="main style1">
          <div className="grid-wrapper">
            <div className="col-4">
              {/* <header className="major">
                              
                            </header> */}
              <strong>Morah D'asra:</strong>
              <br />
              Harav Moshe Langer
              <br />
              <a href="tel: 516-404-4683"> 516-404-4683</a>
              <br />
              <br />
              <strong>Gabbaim:&nbsp;</strong>
              <br />
              Moshe Simcha Levine&nbsp;​
              <br />
              Boruch Steinharter&nbsp;
              <br />
              <br />
              <strong>Treasurers:</strong>
              <br />
              Yitzy Diskind
              <br />
              Elazar Simons&nbsp;
              <br />
              <br />
            </div>

            <div className="col-4">
              <strong>
                <a href="mailto:Board@torahutfilla.org">Board Members:</a>
              </strong>
              <br />
              Menachem Brickman
              <br />
              Boruch Englard
              <br />
              Shmuli Fromovitz
              <br />
              Nesanel Link
              <br />
              ​Yehuda Schuster
              <br />
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={shul} alt="750 shul " />
              </span>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
