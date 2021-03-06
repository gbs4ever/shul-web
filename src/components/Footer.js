import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        {/* <ul className="icons">
                    <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul> */}
        <ul className="copyright">
          <li>
            &copy;Bais Medrash Torah Utfilla 750 Chestnut Ridge Road Suite 101
            Chestnut Ridge NY 10977
          </li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP </a> ||{' '}
            <a href="https://www.simchagreenbaum.dev">Simcha Greenbaum</a>
          </li>
        </ul>
      </section>
    )
  }
}

export default Footer
