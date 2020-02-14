import React from 'react'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default ({ setIsVisible, isVisible, alignRight }) =>
  <div style={{
    marginTop: '2rem',
    textAlign: `${alignRight ? 'right' : 'left'}`
  }}
  >
    <button
      type='button'
      style={{
        color: '#fff',
        padding: '1rem 2rem',
        fontFamily: 'Roboto',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        border: '1px solid #fff',
        fontWeight: '100',
        backgroundColor: 'transparent',
        fontSize: '16px'
      }}
      onClick={() => setIsVisible(!isVisible)}
    >
      <span style={{
        verticalAlign: 'middle',
        paddingRight: '5px'
      }}
      >
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
