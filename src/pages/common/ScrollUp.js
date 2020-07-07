import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import { animateScroll as scroll, scrollSpy } from 'react-scroll'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import './ScrollUp.css'

class ScrollUp extends Component {
  componentDidMount () {
    scrollSpy.update()
  }

  handleScrollToTop () {
    scroll.scrollToTop()
  }

  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return (
      <>
        <button
          title='Back to top'
          className='scroll__button'
          onClick={this.handleScrollToTop}
        >
          <ExpandLessIcon style={{
            color: '#fff'
          }}
          />
        </button>
        {this.props.children}
      </>
    )
  }
}

export default withRouter(ScrollUp)
