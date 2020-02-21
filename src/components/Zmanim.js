import React from 'react'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parsha: '',
      candle: '',
      havdalah: '',
      loading: '',
      yomtov: '',
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
        if (zman[2].category === 'holiday') {
          //must be refactored !!! SG
          this.setState({
            parsha: zman[1].hebrew,
            candle: zman[0].title,
            havdalah: zman[3].title,
            yomtov: zman[2].hebrew,
            loading: true,
          })
        } else {
          this.setState({
            parsha: zman[1].hebrew,
            candle: zman[0].title,
            havdalah: zman[2].title,
            yomtov: '',
            loading: true,
          })
        }

        console.log(this.state)
      })
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
        <div> {this.state.yomtov}</div>
        <div> Motzei shabbos Marriv/{this.state.havdalah}</div>
      </div>
    )
  }
}

export default Template
