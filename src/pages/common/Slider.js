import React, { useState } from 'react'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import SlideToggleContent from './SlideToggleContent'

import './Slider.css'

export default ({ name, children }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='slider'>
      <div className='row'>
        <div className='col-md-offset-1 col-md-11'>
          <button
            type='button'
            className='slider__button'
            onClick={() => setIsVisible(!isVisible)}
          >
            <Name {...{ name }} />
            <Icons {...{ isVisible }} />
          </button>
        </div>
      </div>
      <SlideToggleContent {...{ isVisible }}>
        <div className='slider__child'>
          {children}
        </div>
      </SlideToggleContent>
    </div>
  )
}

const Icons = ({ isVisible }) =>
  isVisible
    ? (
      <ExpandLessIcon
        style={{
          verticalAlign: 'middle',
          opacity: '0.8',
          color: '#523178',
          fontSize: '60px'
        }}
      />
    )
    : (
      <ExpandMoreIcon
        style={{
          verticalAlign: 'middle',
          opacity: '0.9',
          color: '#523178',
          fontSize: '60px'
        }}
      />
    )

const Name = ({ name }) =>
  <span
    className='Bold slider__name' >
    {name}
  </span>
