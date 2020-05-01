import React, { useState } from 'react'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import SlideToggleContent from './../common/SlideToggleContent'

export default ({ name, children }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div style={{
      marginBottom: '2rem',
      width: '100%'
    }}
    >
      <div className='row'>
        <div className='col-md-10 col-md-offset-1'>
          <button
            type='button'
            style={{
              border: 'none',
              padding: 0,
              backgroundColor: 'transparent'
            }}
            onClick={() => setIsVisible(!isVisible)}
          >
            <div style={{display:"flex"}}>
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
        <div style={{
          margin: '1rem 0'
        }}
        >
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
    className='Bold' style={{
      verticalAlign: 'middle',
      fontSize: '22px',
      color: 'white',
      fontWeight: "700",
      

    }}
  >
    {name}
  </span>
