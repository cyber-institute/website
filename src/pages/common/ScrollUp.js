import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import { animateScroll as scroll, scrollSpy } from 'react-scroll'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'

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
          style={{
            opacity: '0.8',
            backgroundColor: 'rgb(82, 49, 120)',
            width: '40px',
            height: '40px',
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            borderRadius: '5px',
            border: 'none',
            zIndex: '1',
            cursor: 'pointer'
          }}
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
