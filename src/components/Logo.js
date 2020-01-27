import React from 'react'
import shullogo from '../assets/images/shullogo.jpg'
class Logo extends React.Component {
  render() {
    return (
      <div className="col-6">
        <span>
          <img src={shullogo} alt="750 shul " />
        </span>
      </div>
    )
  }
}

export default Logo
