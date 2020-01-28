import React from 'react'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parsha: '',
      candle: '',
      havdalah: '',
      loading: '',
    }
  }

  componentDidMount() {
    // getzmanim = () => {
    fetch(
      'https://www.hebcal.com/shabbat/?cfg=json&geo=zip&zip=10977&m=50&leyning=off'
    )
      .then(r => r.json())
      .then(data => {
        let zman = data.items
        this.setState({
          parsha: zman[2].hebrew,
          candle: zman[1].title,
          havdalah: zman[3].title,
          loading: true,
        })
        console.log(this.state)
      })
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className="col-4">
        {/* {this.state.loading != true ? console.log("error ")
      :   */}

        <div>This weeks parsha is {this.state.parsha}</div>
        <div>{this.state.candle}</div>
        <div> Motzei shabbos Marriv/{this.state.havdalah}</div>
      </div>
    )
  }
}

export default Template
