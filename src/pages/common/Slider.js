import React, { useState } from 'react'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import SlideToggleContent from './SlideToggleContent'

export default ({ name, children }) => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div style={{
      marginBottom: '1rem',
      width: '100%'
    }}
    >
      <div className='row'>
        <div className='col-md-offset-1'>
          <button
            type='button'
            style={{
              border: 'none',
              padding: 0
            }}
            onClick={() => setIsVisible(!isVisible)}
          >
            <Name {...{ name }} />
            <Icons {...{ isVisible }} />
          </button>
        </div>
      </div>
      <SlideToggleContent {...{ isVisible }}>
        <div style={{
          margin: '1rem 0'
        }}
        >
          <div>
            {children}
          </div>
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
    className='Bold' style={{
      verticalAlign: 'middle',
      fontSize: '40px',
      letterSpacing: '6px',
      color: 'rgb(82, 49, 120)'
    }}
  >
    {name}
  </span>
