import React, { useState } from 'react'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import SlideToggleContent from './../common/SlideToggleContent'
import './WhiteSlider.css'

export default ({ name, children }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='w-slider'>
      <div className='row'>
        <div className='col-md-10 col-md-offset-1'>
          <button
            type='button'
            className='w-slider__button'
            onClick={() => setIsVisible(!isVisible)}
          >
            <div className='w-slider__display'>
            <div>
                <Name {...{ name }} />
            </div>
            <div>
                <Icons {...{ isVisible }} />
            </div>
            </div>
          </button>
        </div>
      </div>
      <SlideToggleContent {...{ isVisible }}>
        <div className='w-slider__children'>
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
          color: 'white',
          fontSize: '60px'
        }}
      />
    )
    : (
      <ExpandMoreIcon
        style={{
          verticalAlign: 'middle',
          opacity: '0.9',
          color: 'white',
          fontSize: '60px'
        }}
      />
    )

const Name = ({ name }) =>
  <span
    className='Bold w-slider__name' >
    {name}
  </span>
