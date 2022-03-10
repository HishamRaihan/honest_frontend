import React from 'react'
import './Footer.scss'
export default function Footer () {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column
          <div className="col">
            <h4>Honest Installs</h4>
            <ul className='list-unstyled'>
              <li>917-675-1559</li>
              <li>Brooklyn, New York</li>
              <li></li>
            </ul>
          </div> */}
          <hr />
          <div className='row footer'>
            <p className='col-sm'>
                &copy;{new Date().getFullYear()} Honest Installs | All rights reserved| Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
