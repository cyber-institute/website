import React, { useState } from 'react'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import SlideToggleContent from './../common/SlideToggleContent'

export default ({ name,byline, children }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div style={{
      marginBottom: '1rem',
      width: '100%'
    }}
    >
      <div className='row'>
        <div className='col-md-offset-1 col-md-11'>
          <button
            type='button'
            style={{
              border: 'none',
              padding: 0,
              backgroundColor: 'transparent'
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
          {children}
        </div>
      </SlideToggleContent>
      <Content {...{isVisible, byline}}/>
      
    </div>
  )
}

const Content = ({isVisible, byline}) => 
  isVisible
  ? (
    <></>
  )
  : (
    <div style={{
      margin: '1rem 0'
    }}
    >
      <div className="col-md-offset-1 col-md-10">
      <div className="col-md-offset-1 col-md-10">
         <p>{byline}</p>
         </div>
      </div>
     
    </div>
  )

const Icons = ({ isVisible }) =>
  isVisible
    ? (
      <ExpandLessIcon
        style={{
          verticalAlign: 'middle',
          opacity: '0.8',
          color: '#333',
          fontSize: '60px'
        }}
      />
    )
    : (
      <ExpandMoreIcon
        style={{
          verticalAlign: 'middle',
          opacity: '0.9',
          color: '#333',
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
      color: '#333'
    }}
  >
    {name}
  </span>
