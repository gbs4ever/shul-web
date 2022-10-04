import React from 'react'

class ShulInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="first-row">
          Please take this opportunity to help make our kehilla and shul
          complete. Membership for our bais medrash is $750 a year.<br></br>
          Payment can be made by check made out to Cong Torah Utfilla.
          <br></br> To pay by credit card or to set up recurring monthly
          payments.
          <br></br>
          <a href="https://secure.cardknox.com/torahutfilla" className="button">
            click here
          </a>{' '}
        </div>
        <div className="second-row">
          <iframe src="https://secure.cardknox.com/torahutfilla" />
        </div>
      </div>
    )
  }
}

export default ShulInfo
