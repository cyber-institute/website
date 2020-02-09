import React from 'react'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default ({ clickButton, isVisible, alignRight }) =>
  <div style={{
    marginTop: '2rem',
    textAlign: `${alignRight ? 'right' : 'left'}`,
    position: 'absolute',
    right: '50%'
  }}
  >
    <button
      type='button'
      style={{
        color: '#000',
        backgroundColor: '#fff',
        fontSize: '18px',
        letterSpacing: '0.25px',
        border: 'none'
      }}
      onClick={() => clickButton()}
    >
      <span style={{
        verticalAlign: 'middle',
        paddingRight: '5px'
      }}
      >
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
