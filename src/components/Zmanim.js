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
        let parsha
        let candle
        let havdalah
        let yomtov

        for (const zman_type of zman) {
          switch (zman_type.category) {
            case 'candles':
              candle = zman_type.title
              break
            case 'parashat':
              parsha = `This weeks parsha is,  ${zman_type.hebrew}`
              break
            case 'havdalah':
              havdalah = `Motzei shabbos Marriav/  ${zman_type.title}`
              break
            case 'holiday':
              yomtov = `This week is  ${zman_type.hebrew}`
              break
            default:
            // code block
          }
        }

        this.setState({
          parsha: parsha,
          candle: candle,
          havdalah: havdalah,
          yomtov: yomtov,
        })

        console.log(this.state)
      })
  }

  render() {
    return (
      <div className="col-4">
        {/* {this.state.loading != true ? console.log("error ")
      :   */}
        <h2>Bais Medrash Torah Utfilla</h2>
        <div>{this.state.parsha ? this.state.parsha : this.state.yomtov}</div>
        <div>{this.state.candle}</div>
        <div> </div>
        <div>{this.state.havdalah}</div>
        <div>{this.state.Motzei}</div>
      </div>
    )
  }
}

export default Template
