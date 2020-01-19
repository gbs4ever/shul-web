import React from 'react'

class Donation extends React.Component {
  render() {
    return (
      <div>
        Please take this opportunity to help make our kehilla and shul complete
        with your secure online donation. All donations are tax deductible.{' '}
        <br />{' '}
        <a href="https://secure.cardknox.com/torahutfilla" className="button">
          Donate
        </a>
      </div>
    )
  }
}

export default Donation
