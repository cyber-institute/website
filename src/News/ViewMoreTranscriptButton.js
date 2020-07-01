import React from 'react'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default ({ clickButton, isVisible }) =>
  <div style={{
    marginTop: '2rem',
    zIndex: '1'
  }}
  >
    <button
      type='button'
      style={{
        color: '#000',
        backgroundColor: '#fff',
        fontSize: '18px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '300',
        letterSpacing: '0.25px',
        border: 'none',
        cursor: 'pointer'
      }}
      onClick={() => clickButton()}
    >
      <span style={{
        verticalAlign: 'middle',
        paddingRight: '5px'
      }}
      >
        {isVisible ? 'View Transcript' : 'View Transcript'}
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
