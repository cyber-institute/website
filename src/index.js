import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import AppBar from './AppBar/AppBar'
import Footer from './Footer/Footer'
import News from './News/news'
import Home from './Home/home'

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './swirly_lines'

// import 'flexboxgrid/dist/flexboxgrid.min.css'
import './flexboxgrid.css'
import './style.css'

class App extends Component {
  render () {
    return (
      <>
        <Router>
            <div>
            {/* <Typography variant='h6'>Scroll to Elevate App Bar</Typography> */}
            <ul style={{ width: '100%' }}>
            <Link className='Light' to="/" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>Home</Link>
              <a className='Light' style={{ float: 'right', fontSize: '13px' }}>Case Studies</a>
              <a className='Light' style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>Research</a>
              <a className='Light' style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>Operations</a>
              <a className='Light' style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>Education</a>
              <a className='Light' style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>Partnerships</a>
              <a className='Light' style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>Blog</a>
              <a className='Light' style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>Team</a>
              <Link className='Light' to="/news" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>News</Link>
              <a className='Light' style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>About</a>
            </ul>
            </div>
            <Route path="/news" component={News} />
            <Route path="/" component={Home} />
            </Router>
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)


