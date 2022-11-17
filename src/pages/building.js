import * as React from 'react'
import background from '../assets/images/shul_Quality.jpg'
export default function Index() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        width: '250px',
        height: '100%',
      }}
    ></div>
  )
}
