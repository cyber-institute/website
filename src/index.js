import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Footer from './Footer/Footer'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import News from './News/news'
import Home from './Home/home'
import About from './pages/About/index'
import Services from './pages/Services'
import Article from './News/article'
import People from './pages/People'
import Privacy from './pages/Privacy'
import Courses from './pages/Courses'
import FourOFour from './404/404'
import SnackMenu from './Body/SnackMenu'
import CITwhite from '../img/CITwhite.jpg'
import CITfull from './../img/CITfull.png'
import ANULogo from '../img/ANU-LOGO-WHITE.jpg'
import Hamburger from './../img/Hamburger_icon.png'

import ScrollUp from './pages/common/ScrollUp'

import { Route, useParams, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

// import 'flexboxgrid/dist/flexboxgrid.min.css'
import './flexboxgrid.css'
import './style.css'


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

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 

  return (
    <div className="mobile-only" style={{"width": "100%", height: '80px'}}>
      <Link className='Light' to="/" style={{  paddingRight: '2rem', fontSize: '13px' }}><img src={ANULogo} style={{ height: '80px' }} /></Link>
      <Link className='Light' to="/" style={{ paddingRight: '2rem', fontSize: '13px' }}><img src={CITwhite} style={{ height: '55px',marginBottom: '12.5px' }} /></Link>
      <div  style={{ float: "right"}}>
      <img src={Hamburger} style={{ width: '25px',marginTop: '27.5px', float: 'right', paddingRight: '2rem'}} onClick={handleClick} aria-controls="fade-menu" aria-haspopup="true"/>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link className='Light' to="/" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}><img src={CITwhite} style={{ width: '25px' }} /></Link>
        <MenuItem onClick={handleClose}><Link className='Light' to="/" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='Light' to="/about" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>About Us</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='Light' to="/courses" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>Courses</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='Light' to="/people" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>People</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='Light' to="/services" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>Services</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='Light' to="/news" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>News and Events</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='Light' to="/privacy" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px' }}>Privacy</Link></MenuItem>
        
        </Menu>      
      </div>
    </div>
    
  );
}


class App extends Component {
  render () {
    return (
      <>
  <div className={useStyles.root}>
  <Router history={history}>
       <ElevationScroll>
         <AppBar style={{ backgroundColor: '#fff', color: '#323232' }}>
          
          <Toolbar>  
            
            <div className="desktop-only" style={{ width: '100%', height: '80px'  }}>
            <Link className='Light' to="/" style={{  paddingRight: '1rem', fontSize: '13px' }}><img src={ANULogo} style={{ height: '80px' }} /></Link>
            <Link className='Light' to="/" style={{ paddingRight: '2rem', fontSize: '13px' }}><img src={CITfull} style={{ height: '55px',marginBottom: '12.5px' }} /></Link>
              <ul style={{display:'inline'}}>
                <Link className='Light' to="/privacy" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px', marginTop:'32px'}}>Privacy</Link>
                <Link className='Light' to="/news" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px', marginTop:'32px' }}>News and Events</Link>
                <Link className='Light' to="/services" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px', marginTop:'32px' }}>Services</Link>
                <Link className='Light' to="/courses" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px', marginTop:'32px' }}>Courses</Link>
                <Link className='Light' to="/people" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px', marginTop:'32px' }}>People</Link>
                <Link className='Light' to="/about" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px', marginTop:'32px' }}>About Us</Link>
                <Link className='Light' to="/" style={{ float: 'right', paddingRight: '2rem', fontSize: '13px', marginTop:'32px' }}>Home</Link>
              </ul>
            </div>
            
          <FadeMenu />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ScrollUp>
      <Switch>
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/news/:type/:head" component={Article}></Route>
        <Route exact path="/news" component={News} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/people" component={People} />
        <Route component={FourOFour} />
      </Switch>
      </ScrollUp>
      </Router>
    </div>
    <SnackMenu />
    <Footer />
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)

