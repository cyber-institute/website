import React from 'react'

import './style.css'

export default () =>
  <>
    <footer
      className='pt-5 pb-4' id='contact' style={{
        marginTop: '10rem'
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6 mt-2 mb-4'>
            <h5 className='mb-4 font-weight-bold'>ABOUT US</h5>
            <ul className='social-pet mt-4'>
              <li><a href='#' title='facebook'><i className='fab fa-facebook-f' /></a></li>
              <li><a href='#' title='twitter'><i className='fab fa-twitter' /></a></li>
              <li><a href='#' title='google-plus'><i className='fab fa-google-plus-g' /></a></li>
              <li><a href='#' title='instagram'><i className='fab fa-instagram' /></a></li>
            </ul>
            <ul className='f-address'>
              <li>
                <div className='row'>
                  <div className='col-md-1'><i className='fas fa-map-marker' /></div>
                  <div className='col-md-10'>
                    <h6 className='font-weight-bold mb-0'>10-12 Brisbane Ave Barton ACT</h6>
                    <p />
                  </div>
                </div><br />
              </li>
              <li>
                <div className='row'>
                  <div className='col-md-1'><i className='far fa-envelope' /></div>
                  <div className='col-md-10'>
                    <h6 className='font-weight-bold mb-0'>Have a question?</h6>
                    <p><a href='mailto:cyber@anu.edu.au'><span className='__cf_email__' data-cfemail='bfeccacfcfd0cdcbffcaccdacdcbd7dad2dacc91dcd0d2'>[email&#160;link]</span></a></p>
                  </div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div className='col-md-1'><i className='fab fa-twitter' /></div>
                  <div className='col-md-10'>
                    <h6 className='font-weight-bold mb-0'>Follow us on twitter</h6>
                    <p>twitter@anucyber<a href='#' /></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 mt-2 mb-4'>
            <h5 className='mb-4 font-weight-bold'>WHAT CAUGHT OUR EYE</h5>
            <ul className='f-address'>
              <li>
                <div className='row'>
                  <div className='col-md-1'><i className='fab fa-twitter' /></div>
                  <div className='col-md-10'>
                    <p className='mb-0'>Check out this cool link<a href='#'>Link to something</a></p>
                  </div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div className='col-md-1'><i className='fab fa-twitter' /></div>
                  <div className='col-md-10'>
                    <p className='mb-0'>Check out this cool link<a href='#'>Link to something</a></p>
                  </div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div className='col-md-1'><i className='fab fa-twitter' /></div>
                  <div className='col-md-10'>
                    <p className='mb-0'>Check out this cool link<a href='#' />Link to something</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 mt-2 mb-4'>
            <h5 className='mb-4 font-weight-bold'>LATEST UPDATES</h5>
            <ul className='recent-post'>
              <li>
                <div className='col-md-10'>
                  <label className='mr-3'>17<br /><span>OCT</span></label>
                  <span>Checkout what we are up to</span>
                </div>
              </li>
              <li>
                <div className='col-md-10'>
                  <label className='mr-3'>25<br /><span>OCT</span></label>
                  <span>Something Else</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <section className='copyright'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 '>
            <div className='text-center text-white Light'>
        A STRATEGIC INITIATIVE OF THE ANU
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
