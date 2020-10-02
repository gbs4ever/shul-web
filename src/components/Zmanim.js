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
      Motzei: '',
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
        if (zman[0].category === 'holiday') {
          let yomtova = zman[0].hebrew
          let havdalah = zman[3].title
          this.setState({
            candle: zman[1].title,
            yomtov: yomtova,
            havdalah: `No melacha maybe done before ${havdalah}`,
            Motzei: `Marriv  ${zman[5].title}`,
          })
        } else {
          let havdalaha = zman[2].title
          this.setState({
            parsha: `This weeks parsha is ${zman[1].hebrew}`,
            candle: zman[0].title,
            havdalah: `Motzei shabbos Marriv/ ${havdalaha}`,
          })
        }

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
