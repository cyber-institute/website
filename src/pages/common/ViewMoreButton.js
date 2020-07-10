import React from 'react'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './ViewMoreButton.css'

export default ({ setIsVisible, isVisible, alignRight }) =>
  <div style={{
    marginTop: '2rem',
    textAlign: `${alignRight ? 'right' : 'left'}`
  }}
  >
    <button
      type='button'
      className='view-more__button'
      onClick={() => setIsVisible(!isVisible)}
    >
      <span className='view-more__icon'>
        {isVisible ? 'View Less' : 'View More'}
      </span>
      {
        isVisible
          ? (
            <ExpandLessIcon
              style={{
                verticalAlign: 'middle',
                width: '0.7em'
              }}
            />
          )
          : (
            <ExpandMoreIcon
              style={{
                verticalAlign: 'middle',
                width: '0.7em'
              }}
            />
          )
      }
    </button>
  </div>
