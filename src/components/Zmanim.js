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
      'https://www.hebcal.com/shabbat/?cfg=json&geo=zip&zip=10977&m=55&leyning=off'
    )
      .then(r => r.json())
      .then(data => {
        let zman = data.items
        this.setState({
          parsha: zman[1].hebrew,
          candle: zman[0].title,
          // need to fix later sg  havdalah: zman[2].hebrew,
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
        <h2>Bais Medrash Torah Utfilla</h2>
        <div>This weeks parsha is {this.state.parsha}</div>
        <div>{this.state.candle}</div>
        {/* <div> Motzei shabbos Marriv/{this.state.havdalah}</div> */}
      </div>
    )
  }
}

export default Template
