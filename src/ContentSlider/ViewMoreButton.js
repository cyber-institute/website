import React from 'react'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './ViewMoreButton.css'

export default ({ clickButton, isVisible, alignRight }) =>
  <div style={{
    marginTop: '2rem',
    zIndex: '1'
  }}
  >
    <button
      type='button'
      className='view-more__button'
      onClick={() => clickButton()}
    >
      <span className='view-more__span'>
        {isVisible ? 'Load Less' : 'Load More'}
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
