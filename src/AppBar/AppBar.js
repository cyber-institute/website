import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import PropTypes from 'prop-types'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import News from './../News/news'
import Home from './../Home/home'

import CITwhite from '../../img/CITwhite.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

function ElevationScroll (props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default function CyberAppBar () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar style={{ backgroundColor: '#fff', color: '#323232' }}>
          <Toolbar>
          <Router>
            <img src={CITwhite} style={{ width: '25px' }} />
            <div>
            </div>
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
            <Route path="/news" component={News} />
            <Route exact path="/" component={Home} />
            </Router>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}
