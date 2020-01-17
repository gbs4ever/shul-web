import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import ShulInfo from '../components/ShulInfo.js'
import shul from '../assets/images/shul.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter - Photon'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-8">
              <ShulInfo />
              {/*  <ul className="major-icons">
                    <li>
                      <span className="icon style1 major fa-code"></span>
                    </li>
                    <li>
                      <span className="icon style2 major fa-bolt"></span>
                    </li>
                    <li>
                      <span className="icon style3 major fa-camera-retro"></span>
                    </li>
                    <li>
                      <span className="icon style4 major fa-cog"></span>
                    </li>
                    <li>
                      <span className="icon style5 major fa-desktop"></span>
                    </li>
                    <li>
                      <span className="icon style6 major fa-calendar"></span>
                    </li>
    </ul> 
                </div>
                <div className="col-6">
                  <header className="major">
                    <a href="https://www.myzmanim.com/day.aspx?askdefault=1&vars=24685993&q=chestnut%20ridge">
                      zmanim{' '}
                    </a>
                  */}
            </div>
          </div>
        </section>

        {/* <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Adipiscing amet consequat</h2>
              </header>
              <p>
                Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
              </p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </section> */}

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
              <strong>Board Members:</strong>
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
