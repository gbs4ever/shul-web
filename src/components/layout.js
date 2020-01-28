import React from 'react'
import '../assets/scss/main.scss'
import shullogo from '../assets/images/shullogo.jpg'

import Header from './Header'
import Footer from './Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        {/* <div className="style3" >
       <img  className="logo" src={shullogo} alt="logo "
        /> 
        </div> */}
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
