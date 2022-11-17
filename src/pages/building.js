import * as React from 'react'
import background from '../assets/images/shul_Quality.jpg'
export default function Index() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <button class="open-button" onclick="openForm()">
        Open Form
      </button>
    </div>
  )
}
