import React, { Component } from 'react'

import { animateScroll as scroll, scrollSpy } from 'react-scroll'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'

export default class ScrollUp extends Component {
  componentDidMount () {
    scrollSpy.update()
  }

  handleScrollToTop () {
    scroll.scrollToTop()
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
